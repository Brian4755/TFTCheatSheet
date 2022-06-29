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



export {
  newChampion as new,
  create,
}