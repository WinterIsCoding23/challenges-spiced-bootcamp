import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

import useSWR from "swr"; 
import {useSearchParams} from "next/navigation";



export default function Character() {
  //const id = 1;
  const router = useRouter();
  const { id } = router.query; 

  const url = `https://swapi.dev/api/people/${id}`;

  const fetcher = async url => {
    const res = await fetch(url)
   
    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      // Attach extra info to the error object.
      error.info = await res.json()
      error.status = res.status
      throw error
    }
   
    return res.json()
  }

  const { data, error, isLoading, isValidating } = useSWR(url, fetcher);
  
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  //useRouter().query.id

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
