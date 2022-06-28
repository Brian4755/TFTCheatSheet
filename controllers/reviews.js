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

export {
  index,
  create
}