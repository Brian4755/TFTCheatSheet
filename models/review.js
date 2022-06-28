import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  item: String,
  champion: String,
  tier: String,
  notes: String,
  reviewer: {type: Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)

export {
  Review
}