import Product from "../components/Product";

import { useRouter } from "next/router";
import useSWRMutation from "swr/mutation";


export default function ProductDetailsPage() {
  const router = useRouter();
  const { query:  { id }, push } = router;

  async function updateProduct(url, { arg }) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(arg),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }
  
  const { trigger, isMutating } = useSWRMutation(
    `/api/products/${id}`,
    updateProduct
  );

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    await trigger(productData);
    push("/");
  }

  isMutating && (
    <p>Submitting your changes</p>
  )

  // Deleting a product/fish:
  async function handleDeleteProduct(){
    const response = await fetch(`/api/products/${id}`, { method: "DELETE" });
    
    if (response.ok){
      await response.json();
      push("/");
    }

    if (!response.ok) {
      console.log(`Error: ${response.status}`);
    }
  }

  return <Product onSubmit={handleEditProduct} onDelete={handleDeleteProduct}/>;
}

/*
- In the return statement of the `ProductDetailsPage`, pass `handleDeleteProduct` to the `Product` component as a prop called `onDelete`.

- If the `response` is `ok`,
  - _wait_ for `response.json()` and use `push("/")`. //Sven: not necessary
- If the `response` is not `ok`, log the `response.status` as an error to the console.
*/
