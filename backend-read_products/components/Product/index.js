import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledButton } from "../Button/Button.styled";
import { ProductCard } from "./Product.styled";

import React, { useState } from "react";
import ProductForm from "../ProductForm";


export default function Product({ onSubmit, onDelete }) {
  const [ isEditMode, setIsEditMode ] = useState(false);
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
      {data.reviews && (
          <div>
            <h3>Reviews of beloved customers:</h3>
            <ul style={{listStyleType: "none"}}>
              {data.reviews.map((review)=> (
                <li key={review._id}>
                  <h4 style={{margin: 0}}>{review.title}</h4>
                  <p style={{margin: 0, fontStyle: "italic"}}>{review.text}</p>
                  <p style={{marginBottom: 20, marginTop: 0}}>Rating: {review.rating}</p>
                </li>
               ))}
            </ul>        
          </div>
      )}
      <StyledButton type="button" onClick={() => { setIsEditMode(!isEditMode) }}>Edit product</StyledButton>
      { isEditMode && (
        <ProductForm onSubmit={onSubmit} isEditMode={isEditMode}/>
      )}
      <StyledButton type="button"onClick={() => onDelete(id)}>Delete product</StyledButton>
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
