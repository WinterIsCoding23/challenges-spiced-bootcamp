//import { products } from "../../../lib/products";
import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  } 
  // else {
  //   return response.status(405).json({ message: "Method not allowed" });
  // }
  //return response.status(200).json(products);

  if (request.method === "POST") {
    try {
      const productData = request.body;
      const product = new Product (productData);
      await product.save();
      return response.status(201).json({ status: "Product created." });
    } catch (error) {
      console.log(error);
      return response.status(400).json({error: error.message});
    }
  }   
}

/*
CREATE-challenge:
...write the code for the `request.method` `POST` :
- Use a `try...catch` block.
- Try to:
  - Save the product data submitted by the form - accessible in `request.body` - to a variable called `productData`.
  - Pass the `productData` a `new Product(data_goes_here)` and save it in a variable called `product`.
  - _Wait_ until the new product was saved in the database with `product.save()`.
  - Respond with a status `201` and the message `{ status: "Product created." }`.
- If an error occurs:
  - Log the error to the console.
  - Respond with a status `400` and the message `{ error: error.message }`.

Submitting the form will not yet work because the form does not know that you've created a `POST` route it can use.


READ-challenge:
- Make the `handler` function `async` and `await` the connection to the database.
- If the `request.method` is `GET`,

  - use the `Product` model to find all products and
  - return them as a response.
  */

