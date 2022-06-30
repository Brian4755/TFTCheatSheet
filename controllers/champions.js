import { Champion } from '../models/champion.js'

function newChampion(req, res) {
  Champion.find({})
  .then(champions => {
    res.render('champions/new', {
      title: 'Add Champion',
      champions
    })
  })
}

function create(req, res) {
  Champion.create(req.body)
  .then(champion => {
    res.redirect('/champions/new')
  })
}

function deleteChampion(req, res) {
  Champion.findById(req.params.id)
  .then(champion => {
    champion.delete()
    .then(() => {
      res.redirect('/champions')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function index(req, res) {
  Champion.find({})
  .then(champions => {
    res.render('champions/index', {
      champions,
      title: 'Champions List'
    })
  })
}


export {
  newChampion as new,
  create,
  deleteChampion as delete,
  index
}