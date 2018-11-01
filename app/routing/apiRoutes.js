const bugs = require('../data/bugs');

module.exports = function(app){
    app.get('/api/bugs', function(req, res){
        res.json(bugs);
    })

    app.post('/api/bugs', function(req, res){

    })
};