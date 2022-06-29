import mongoose from 'mongoose'

const Schema = mongoose.Schema

const championSchema = new Schema({
  name: {type: String, required: true, unique: true},
}, {
  timestamps: true
})

const Champion = mongoose.model('Champion', championSchema)

export {
  Champion
}