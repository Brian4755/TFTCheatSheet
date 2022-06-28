import { Review } from '../models/review.js'

function index(req, res) {
  console.log(res.locals, 'here')
  Review.find({})
  .then(reviews => {
    res.render('reviews/index', {
      reviews,
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