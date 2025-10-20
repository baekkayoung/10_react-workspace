import { createContext, useEffect, useState } from "react";
import "./App.css";
import AirInfo from "./components/AirInfo";
import SelectSido from "./components/SelectSido";
import SelectStation from "./components/SelectStation";

export const AirStateContext = createContext();
export const AirDispatchContext = createContext();

function App() {
  const [sidoList, setSidoList] = useState([]); // sido 목록
  const [stationData, setStationData] = useState({}); // 시도별 측정소 데이터
  const [airData, setAirData] = useState({}); // 측정소별 공기정보4

  const [sido, setSido] = useState(""); // 선택된 시도
  const [station, setStation] = useState(""); // 선택된 측정소
  const [air, setAir] = useState(null); // 선택된 측정소의 공기 정보

  useEffect(() => {
    fetch("/data/mockData.json")
      .then((res) => res.json())
      .then((data) => {
        setSidoList(data.sido);
        setStationData(data.stationMock);
        setAirData(data.airMock);
        // 여기서 state에 저장 가능
      })
      .catch((err) => console.error(err));
  }, []);

  // sido 렌더링 후 console.log 출력
  useEffect(() => {
    console.log("선택된 시도: " + sido);
  }, [sido]);

  useEffect(() => {
    console.log("선택된 측정소: " + station);
    if (station && airData[station]) {
      // airMock 객체에 station명으로 접근
      setAir(airData[station]);
    } else {
      setAir(null);
    }
  }, [station, airData]);

  // 변하는 값 : sido, station, air
  // 변하지 않는 값 : setSido, setStation, setAir
  return (
    <AirStateContext.Provider value={{ sido, station, air }}>
      <AirDispatchContext.Provider value={{ setSido, setStation, setAir }}>
        <div className="App">
          <div cla>
            <SelectSido sidoList={sidoList} />
            <SelectStation
              sido={sido}
              stationList={sido ? stationData[sido] : []}
            />
          </div>
          <AirInfo air={air} />
        </div>
      </AirDispatchContext.Provider>
    </AirStateContext.Provider>
  );
}

export default App;
