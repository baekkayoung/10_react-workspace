import { useContext } from "react";
import { AirDispatchContext } from "../App";
import "./SelectSido.css";

const SelectSido = ({ sidoList }) => {
  const { setSido, setStation } = useContext(AirDispatchContext);
  return (
    <div className="SelectSido">
      <select
        onChange={(e) => {
          setSido(e.target.value);
          setStation("");
        }}
      >
        <option value="">시도 선택</option>
        {sidoList.map((sido) => (
          // sidoList 배열을 순회하며 option 생성
          // key, value, 화면에 보여지는 텍스트 모두 sido
          <option key={sido} value={sido}>
            {sido}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectSido;
