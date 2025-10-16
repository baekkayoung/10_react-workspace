import { useSearchParams } from "react-router-dom";
const Home = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get("value"));
  //http://localhost:5178/?value=hello
  return <div>Home</div>;
};

export default Home;
