import "./App.css";
import { useReducer, useRef, createContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("todosprout", JSON.stringify(nextState));
  return nextState;
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const [currentPage, setCurrentPage] = useState("home");
  const [pageData, setPageData] = useState({});
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("todosprout");

    if (!storedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);

    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > Number(maxId)) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    });
    setIsLoading(false);
  }, []);

  const onCreate = (date, todos) => {
    const existingItem = data.find((item) => {
      const itemDate = new Date(item.date);
      const targetDate = new Date(date);
      return (
        itemDate.getFullYear() === targetDate.getFullYear() &&
        itemDate.getMonth() === targetDate.getMonth() &&
        itemDate.getDate() === targetDate.getDate()
      );
    });

    if (existingItem) {
      dispatch({
        type: "UPDATE",
        data: {
          ...existingItem,
          todos: [
            ...existingItem.todos,
            ...todos.map((t) => ({ ...t, id: Date.now() + Math.random() })),
          ],
        },
      });
    } else {
      dispatch({
        type: "CREATE",
        data: {
          id: idRef.current++,
          date,
          todos: todos.map((t) => ({ ...t, id: Date.now() + Math.random() })),
        },
      });
    }
  };

  const onUpdate = (id, date, todos) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        date,
        todos,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  const handleNavigate = (page, data = {}) => {
    setCurrentPage(page);
    setPageData(data);
  };

  if (isLoading) {
    return <div className="loading">데이터 로딩중입니다... 🌱</div>;
  }

  return (
    <div className="App">
      <div className="app_header">
        <h1>TodoSprout 🌱</h1>
      </div>

      <TodoStateContext.Provider value={data}>
        <TodoDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          {currentPage === "home" && <Home onNavigate={handleNavigate} />}
          {currentPage === "new" && (
            <New
              onNavigate={handleNavigate}
              initialDate={pageData.date ? new Date(pageData.date) : new Date()}
            />
          )}
          {currentPage === "edit" && (
            <Edit onNavigate={handleNavigate} todoId={pageData.id} />
          )}
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
