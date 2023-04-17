import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    try {
      const response = await fetch (URL);
      const data = await response.json();
      //console.log("Response", response);
      console.log("data", data);
      setCoords({
        longitude:data.longitude,
        latitude:data.latitude,
      });
    } catch (error) {
        console.error("An error ocurred.", error);
    } 
  }  

  useEffect(()=> {
    const interval = setInterval(() => {getISSCoords()}, 5000);
    return ()=> {
      clearInterval(interval);
    }
  }, []);
  
  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}


/*
4. The `setInterval` function returns an ID of the respective interval. You can clear the interval by calling `clearInterval` with this id. Inside the useEffect, return a cleanup function, which executes this `clearInterval` function with the correct ID.
*/
