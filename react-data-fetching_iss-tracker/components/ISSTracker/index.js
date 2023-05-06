import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";

import useSWR from "swr";
import { handleClientScriptLoad } from "next/script";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ISSTracker() {
  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);


  const { data, error, isLoading, isValidating, mutate } = useSWR(URL, fetcher, { refreshInterval: 5000 });  

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log("data: ", data);
  console.log (data.longitude, data.latitude);

  //onRefetch={()=> mutate()}

  return (    
    <main>
      <span role="img" aria-label={isValidating ? "Validating" : "Ready"}>
        {isValidating ? "Validating...🔄" : "Refreshed ✅"}
      </span>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={()=> mutate()}
      />
    </main>
  );
}

/*
- Destructure the `mutate` function provided by the `useSWR` hook.
- Pass it to the `onRefresh` prop of the `Controls` component. You can use an inline function as in `onReload={() => handleReload()}`.

✨ Congratulations, you can now see the exact position of the ISS whenever you want with the help of `SWR`!

- `SWR` is already installed, so you just have to import it.
- Handle the `isLoading` and `error` states provided by `SWR` as well.
- Make sure `data` is defined before working with it.
- Remember to adapt the `fetcher` function to create a proper `error` state [as explained in the SWR docs](https://swr.vercel.app/docs/error-handling#status-code-and-error-object).
- Note: `SWR` needs you to destructure a `data` object, but the `Map` and `Controls` component need `longitude` and `latitude` as separate props; how can you simply pass the coordinates from `data` without changing the `Map/index.js` and `Controls/index.js` files? (Hint: there are several ways to do this!)
*/