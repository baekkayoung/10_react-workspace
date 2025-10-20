import { useContext } from "react";
import { AirDispatchContext } from "../App";
import "./SelectStation.css";

const SelectStation = ({ stationList = [] }) => {
  const { setStation } = useContext(AirDispatchContext);
  return (
    <div className="SelectStaion">
      <select onChange={(e) => setStation(e.target.value)}>
        <option value="">측정소 선택</option>
        {stationList.map((station) => (
          <option key={station} value={station}>
            {station}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectStation;
