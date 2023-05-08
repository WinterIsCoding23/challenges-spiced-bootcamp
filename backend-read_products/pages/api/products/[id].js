// import { products } from "../../../lib/products";
import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query; // slug-id, so not "_id"

  //const product = products.find((product) => product._id === id);

  if (request.method === "GET"){
    //const product = await Product.findById(id); --> ...from Task 1 (before BONUS)
    const product = await Product.findById(id).populate("reviews");
  
  if (!product) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(product);
}

  if (request.method === "PUT") {
    const productToUpdate = await Product.findByIdAndUpdate(id, { $set: request.body, });
    response.status(200).json({ status: "Product successfully updated." });
  }
}


/*
UPDATE AND DELETE-challenge:
- _Wait_ for `Product.findByIdAndUpdate(id, { $set: request.body, })`.
- Respond with a status `200` and the message `{ status: "Product successfully updated." }`.
*/
