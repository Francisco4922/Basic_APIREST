const { Router } = require('express');
const router = new Router();
const_= require('underscore')
const movies = require('../movies.json');

router.get('/', (req, res) => {
    res.json(movies);
});
router.post('/', function (req, res) {
    console.log(req.body);
    const id = movies.length + 1;
    const { title, director, year } = req.body;
    const newMovie = { id, ...req.body };
    if (title && director && year) {
        movies.push(newMovie);
        res.json({ "message": "Movie Added" });
    } else {
        res.json({ "message": "Error" });
    }

});
router.delete('/:id',function(req,res){
    const {id} = req.params;
    if(id){
        _.each(movies,(movies,i)=>{
            if(movies.id == id){
                movies.splice(i,1);
            }
        })
    }
});
router.put('/:id',function(req,res){
    const {id} = req.params;
    const { title, director, year } = req.body;
    if(id && title && director && year){
    _.each(movies,(movie,i)=>{
        if(movie.id == id){
            movies.title = title;
            movie.director = director;
            movie.year = year;
            
        }
    })
    }else{
        res.json({'error': "error in the update"})
    }
})
module.exports = router;