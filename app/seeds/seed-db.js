// Import Database Models
// =============================================================
const db = require('../models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function() {
  db.openBugs.bulkCreate([{

    title: 'broken code',
    description: "my code is broken",
    link: "https://github.com/ajfleck13/Project-Verat.git",
    pay: '$' + 10,
  }, {

    title: 'broken javascript',
    description: "my javascript is broken",
    link: "https://github.com/ajfleck13/Project-Verat.git",
    pay: '$' + 50,


    }]).then(function(){
      console.log('Data successfully added!');
    }).catch(function(error) {
      console.log('Error', error)
    });
});