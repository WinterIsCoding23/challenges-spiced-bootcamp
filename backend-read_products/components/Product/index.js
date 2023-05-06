import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledButton } from "../Button/Button.styled";
import { ProductCard } from "./Product.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(id ? `/api/products/${id}` : null);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews && 
        <>
          <p>{reviews.title}</p>
          <p>{reviews.text}</p>
          <p>{reviews.rating}</p>
        </>
      }
      <StyledButton type="button" onClick={() => router.push("/")}>
        Back to all
      </StyledButton>
    </ProductCard>
  );
}


/*
BONUS:
- Inside of the return statement, check whether the fetched `data` contain any reviews and if so, display them.
- Feel free to decide which part of the review data you want to display.
*/
