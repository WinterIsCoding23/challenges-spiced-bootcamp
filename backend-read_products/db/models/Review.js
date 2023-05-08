import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  title: { type: String }, 
  text: { type: String },
  rating: { type: Number },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;

/*
The schema should have the following fields:

- `title` (String)
- `text` (String)
- `rating` (Number)
*/
