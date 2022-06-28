import { Review } from '../models/review.js'

function newReview(req, res) {
  res.render("reviews/new", {
    title: 'Add Review'
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Review.create(req.body)
  .then(review => {
    res.redirect('/reviews')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/reviews')
  })
}

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
  newReview as new,
  create,
  index,
}