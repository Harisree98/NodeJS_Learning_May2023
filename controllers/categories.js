let express = require('express');

let categoryRouter = express.Router();

let data = [
   
      {
        "id": 1,
        "name": "Books",
        "description": "Fiction and non-fiction books"
      },
      {
        "id": 2,
        "name": "Movies",
        "description": "Feature films and documentaries"
      },
      {
        "id": 3,
        "name": "Music",
        "description": "Albums, singles, and playlists"
      }
]

// function router(menu){
//   categoryRouter.route('/').get((req,res)=>{
//     // res.send(data);
//      res.render('categories',{data,menu})
//  })
 
//  categoryRouter.route('/details').get((req,res)=>{
//      res.send('This is category Details Route');
//  })

//  return router
// }

function router(menu){
  //default route of category
  categoryRouter.route('/')
      .get((req,res) => {
          //res.send(data)
          res.render('categories',{data,menu})
      })

  categoryRouter.route('/details')
      .get((req,res) => {
          res.send('This is catgeory details Route')
      })

  return categoryRouter

}

module.exports = router

