import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  item: String,
  champion: {type: Schema.Types.ObjectId: "Champion"},
  rating: Number,
  notes: String,
  reviewer: {type: Schema.Types.ObjectId, red: "Profile"},
}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)