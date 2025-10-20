import { useContext } from "react";

import "./AirInfo.css";
import { AirStateContext } from "../App";
const AirInfo = () => {
  const { air } = useContext(AirStateContext);
  if (!air)
    return (
      <h3 className="alertError">
        측정 결과가 없습니다. 잠시 후 다시 시도해주세요.
      </h3>
    );

  const getClassName = (pm10) => {
    if (pm10 <= 30) return "green";
    if (pm10 <= 80) return "yellow";
    if (pm10 <= 150) return "orange";
    return "red";
  };
  return (
    <div className={`AirInfo ${getClassName(air.pm10)}`}>
      <h2>현재 대기 정보</h2>
      <div>미세먼지(PM10) : {air.pm10} </div>
      <div>초미세먼지(PM2.5) : {air.pm25}</div>
      <div>오존(O3) : {air.o3}</div>
      <div>통합대기지수(khaiValue) : {air.khaiValue}</div>
    </div>
  );
};

export default AirInfo;
