import React from "react";

const CardList = ({
  altitude,
  dew_point,
  pressure,

  temperature,
  time,
}) => {
  const infoList = [
    "Date and Time",
    "Temperature",
    "Altitude",
    "Pressure",
    "Dew Point",
  ];

  const localTime = time.toLocaleString();
  const now = Date.now();
  const lime = new Date(now);
  const string = lime.toLocaleString();
  const Time = `${string} `;

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
