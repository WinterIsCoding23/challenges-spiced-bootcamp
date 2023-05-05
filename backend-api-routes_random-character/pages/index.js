import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if(!data) {
    return <h1>Loading...</h1>
  }

  if (error) {
    console.log(error);
    return <h1>Something went wrong!</h1>
  }

  return (
    <>
      <h1>{data.character.firstName} {data.character.lastName}</h1>
      <ul>
        <li>Twitter name: {data.character.twitterName}</li>
        <li>GeoHash: {data.character.geoHash}</li>
      </ul>
    </>
  )
}


/*
- Switch to `pages/index.js`;
- Import the `useSWR` hook, write a fetcher for it and fetch the route `/api/random-character`.
- Adapt the return statement to display the `data` on screen.
- Open the browser: the home page under `/` should now show your fetched data!
*/

