const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorites.model');
//const Popup = require('popups');

//route for favorites

// CREATE
router.post("/favorites", (req, res, next) => {
  Favorite.create({
    location: req.body.location,
    description: req.body.description,
    url: req.body.url
  }).then(() => {
    //Popup.alert({ content: 'You have successfully added a Favorite!'})
    res.redirect('/favorites');
  }).catch((err) => {
    console.log(err);
  });
});

//Get all favorites
router.get('/favorites', (req, res, next) => {
  Favorite.find().then((myFavorites) => {
    console.log(myFavorites)
    res.render('post-history', bunchaPosts);  //{ posts: bunchaPosts }
  });
});

//DELETE
router.get('/:idofpost', (req, res, next) => {
  const id = req.params.idofpost;
  Post.findByIdAndDelete(id)
    .then(() => {
      console.log('success');
      res.redirect('/post');
    })
    .catch((err) => {
      console.log('error', err);
    });
});


//EDIT or UPDATE
router.get('/post/:id/edit', (req, res, next)=>{
  Post.findById(req.params.id)
  .then((postFromDB)=>{
      res.render('edit-post', {thePost: postFromDB});
  })
  .catch((err)=>{
      console.log(err);
  })
});

router.post('/update-post/:id', (req, res, next)=>{
 Post.findByIdAndUpdate(req.params.id, {
  title: req.body.title,
  url: req.body.url,
  summary: req.body.summary
 }).then((blah)=>{
     res.redirect(`/post/${req.params.id}`);
 })
 .catch((err)=>{
  console.log(err);
 })
})
  
//console.log("Post route worked");
  
  

module.exports = router;
