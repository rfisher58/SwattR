var mysql = require("mysql");

var con = mysql.createConnection({
  host: "3360",
  user: "root",
  password: "root",
  database: "bugs"
});


con.connect(function(err){
    if (err) throw err;
    console.log("connected!")
})

var bugArray = [
    {
        "Bug Title": "Broken route",
        "Description": "My route will not route correctly",
        "Link": "https://github.com/ajfleck13/Project-Verat.git",
        "Languages": "javascript, html, node",
        "Pay": "$" + 10,
    },

    {
        "Bug Title": "Broken html",
        "Description": "My modal will not display",
        "Link": "https://github.com/ajfleck13/Project-Verat.git",
        "Languages": "javascript, html, node",
        "Pay": "$" + 5,
    },

     {
        "Bug Title": "Broken Javascript",
        "Description": "I just suck @ Javascript",
        "Link": "https://github.com/ajfleck13/Project-Verat.git",
        "Languages": "Javascript",
        "Pay": "$" + 100,
    },


];

module.exports = bugArray