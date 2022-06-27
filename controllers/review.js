import { Review } from '../models/review.js'

function index(req, res) {
  Review.find({})
  .then(review => {
    res.render('review/index', {
      review,
      title: "Item Reviews"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index
}