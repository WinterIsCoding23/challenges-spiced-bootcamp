import mongoose from "mongoose";
import "./Review";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;


/*
BONUS:
Update the `Product` schema to include a reference to the `Review` model:

- Import the `Review` model with `import "./Review";`
- Below the `currency` key, add a new line for the reviews; you want to define that it is an array of Object-Ids and has a reference to the `Review` schema like so: `reviews: { type: [Schema.Types.ObjectId], ref: "Review" },`


- `name` (String)
- `description` (String)
- `price` (Number)
- `currency` (String)
*/