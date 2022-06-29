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
    res.redirect('/')
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

function deleteReview(req, res) {
  Review.findById(req.params.id)
  .then(review => {
    if (review.owner.equals(req.user.profile._id)) {
      review.delete()
      .then(() => {
        res.redirect('/reviews')
      })
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function edit(req, res) {
  res.render('reviews/edit', {
    title: 'Update Review'
  })
}

export {
  newReview as new,
  create,
  index,
  deleteReview as delete,
  edit
}