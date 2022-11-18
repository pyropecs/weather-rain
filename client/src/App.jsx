import { useState } from "react";
import { useEffect } from "react";
import Card from "./components/Card";
import Loading from "./components/Loading";
function App() {
  const [Res, setRes] = useState([]);
  const [keyAndGeo, setKeyAndGeo] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getResponse();

    getCurrentWeather();
  }, []);

  async function getResponse() {
    setLoading(true);

    const res = await fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=rQp4uuE9eAhVcY34PoXTNXfGgyA8UKaF&q=13.0776%2C%2080.2917`
    );
    const body = await res.json().then((data) => {
      setRes(data);
      // getCurrentForecast(Key, GeoPosition);
      setLoading(false);
    });
  }

  const [datas, setDatas] = useState({});

  async function getCurrentWeather() {
    const res = await fetch(
      `https://dataservice.accuweather.com/forecasts/v1/hourly/1hour/206671?apikey=%09rQp4uuE9eAhVcY34PoXTNXfGgyA8UKaF&details=true&metric=true`
    );
    const body = res.json().then((data) => {
      setDatas(data[0]);
    });
  }

  return isLoading ? (
    <Loading />
  ) : (
    <div className="bg-[url('/background.jpg')] relative w-screen h-screen bg-cover bg-center bg-no-repeat ">
      <div className="bg-black opacity-30 w-full absolute z-0 h-full"></div>
      <div className="containers w-screen m-0 h-full flex items-center md:justify-center ">
        <Card Res={Res} datas={datas} getResponse={getResponse} />
      </div>
    </div>
  );
}

export default App;
