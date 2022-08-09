import { useState } from "react";
import { useEffect } from "react";
import Card from "./components/Card";
import Loading from "./components/Loading";
function App() {
  const [Res, setRes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getResponse();
  }, []);

  async function getResponse() {
    setLoading(true);
    const res = await fetch(`/api/request`);
    const body = await res.json().then((data) => {
      setRes(data);
      setLoading(false);
    });
  }

  return isLoading ? (
    <Loading />
  ) : (
    <div className="bg-[url('/background.jpg')] relative w-screen h-screen bg-cover bg-center bg-no-repeat ">
      <div className="bg-black opacity-30 w-full absolute z-0 h-full"></div>
      <div className="containers w-screen m-0 h-full flex items-center md:justify-center ">
        <Card Res={Res} getResponse={getResponse} />
      </div>
    </div>
  );
}

export default App;
