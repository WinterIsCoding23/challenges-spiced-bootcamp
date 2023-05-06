import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductPage(){
    const router = useRouter ();
    const {id} = router.query;
    const {data, error} = useSWR(`/api/products/${id}`, fetcher); 

    if (!data) {
        return <h1>Loading...</h1>
      }
    
      if (error) {
        console.log(error);
        return <h1>Something went wrong!</h1>
      }
    
      return (
        <>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
        </>
      )
}

