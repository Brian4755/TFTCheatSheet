import { Review } from '../models/review.js'
import { Champion } from '../models/champion.js'


function newReview(req, res) {
  Champion.find({})
  .then(champions => {
    res.render('reviews/new', {
      title: 'Add Review',
      champions
    })
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
  Review.find({})
  .populate('owner')
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
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function update(req, res) {
  Review.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(review => {
    res.redirect(`/reviews/${review._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function show(req, res) {
  Review.findById(req.params.id)
  .populate('owner')
  .populate('champions')
  .then(review => {
    Champion.find({})
    .then(champions => {
      res.render('reviews/show', {
        review,
        title: 'Update Review',
        champions
      })  
    })
  })
}

function addToChampion(req, res) {
  Review.findById(req.params.id)
  .then(review => {
    review.champions.push(req.body.championId)
    review.save()
    .then(() => {
      res.redirect(`/reviews/${review._id}`)
    })
  })
}

export {
  newReview as new,
  create,
  index,
  deleteReview as delete,
  edit,
  update,
  show,
  addToChampion
}