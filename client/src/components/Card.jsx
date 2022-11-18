import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import { MdLocationOn } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = ({ Res, datas }) => {
  let random = 1010;
  const date = new Date(datas.DateTime);
  const { Elevation: height } = Res.GeoPosition;

  return (
    <div className="md:w-[32rem] w-[25rem] flex flex-col  h-auto bg-transparent   z-30 bg-white  text-black border-gray-100 border-solid border-2 ">
      <div className="text-center mx-auto">
        <h1 className="text-[1.875rem] flex font-bold text-slate-600 py-4 text-center m-auto px-2">
          <div className="inline-block mt-[7px] p-auto">
            <MdLocationOn />
          </div>
          CHENNAI INDIA{" "}
        </h1>
      </div>
      <div className="info flex flex-col md:flex-row mx-10">
        <div className="info-details bg-gray-200 order-2 md:order-1 w-[320px]  mt-5  pl-2 rounded-lg md:h-64">
          <CardList
            altitude={height.Metric.Value}
            dew_point={datas.DewPoint.Value}
            pressure={random}
            temperature={datas.Temperature.Value}
            time={date}
          />
        </div>
        <div className="w-[250px] text-center order-1 md:order-2 m-auto p-10 pb-0">
          <CircularProgressbar
            value={datas.RainProbability}
            text={`${datas.RainProbability}%`}
          />
          <h2 className="text-center font-bold text-xl p-6">Rain chance </h2>
        </div>
      </div>
      <div className="py-5 text-center"></div>
    </div>
  );
};

export default Card;
