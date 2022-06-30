import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  item: String,
  champions: [{type: Schema.Types.ObjectId, ref: 'Champion'}],
  tier: String,
  notes: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)

export {
  Review
}