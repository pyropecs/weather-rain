import React from "react";

const CardList = ({
  altitude,
  dew_point,
  pressure,
  rain,
  temperature,
  time,
}) => {
  const infoList = ["Time", "Temperature", "Altitude", "Pressure", "Dew Point"];
  const dateTime = new Date(time);
  const month = dateTime.toLocaleString("default", { month: "short" });
  const localTime = dateTime.toLocaleTimeString();
  const Time = `${dateTime.getDay()} ${month} ${localTime} `;

  const units = [
    Time,
    `${temperature}C`,
    `${altitude}m`,
    `${pressure}hpa`,
    `${dew_point}C`,
  ];
  return (
    <>
      {infoList.map((info, index) => {
        return (
          <div className="py-2 px-2 text-base font-bold text-slate-800 font-sans leading-7">
            <h3 className="inline-block">{info}</h3>
            <span>: </span>
            <p className="inline-block">{units[index]}</p>
          </div>
        );
      })}
    </>
  );
};

export default CardList;
