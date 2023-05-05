import useSWR from "swr"; 

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductsPage() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (!data) {
    return <h1>Loading...</h1>
  }

  if (error) {
    console.log(error);
    return <h1>Something went wrong!</h1>
  }

  console.log(data);

  return (
    <>
        <h1>All Products</h1>
        <ul>
         {data.map((product) => (
            <li key={product.id}>{product.name}</li>
        ))}
        </ul>
    </>
);
}
