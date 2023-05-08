import { StyledForm, StyledHeading, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";
import useSWR from "swr";

export default function ProductForm({ onSubmit }) {
  //const products = useSWR("/api/products");

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   onSubmit(event);

  //   const formData = new FormData(event.target);
  //   const productData = Object.fromEntries(formData);

  //   const response = await fetch("/api/products", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(productData),
  //   });

  //   if (response.ok) {
  //     await response.json();
  //     products.mutate();
  //     event.target.reset();
  //   } else {
  //     console.error(response.status);
  //   }
  // }

  return (
    <StyledForm onSubmit={(event)=>onSubmit(event)}>
      <StyledHeading>Add a new Fish</StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input type="text" id="description" name="description" />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input type="number" id="price" name="price" min="0" />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}

/*
CREATE:
- There already is a `handleSubmit` function which creates a `productData` object with all relevant data.

Your task is to write a fetch for your newly created `POST` route and send the data to your database.

- Fetch the route `"/api/products"`; `await` the return value and save it in a variable called `response`.
- As a second argument, pass an object to the `fetch()` method which contains
  - the `method` set to `POST`,
  - the `body` set the `JSON.stringify()` of `productData`, and
  - an `headers` object with `"Content-Type": "application/json"`.
  - The object should look like the following:

```js
{
method: "POST",
headers: {
  "Content-Type": "application/json",
  },
body: JSON.stringify(productData),
}
```
*/