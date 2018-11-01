const express = require("express");
const path = require("path");

const app = express();

const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/home.html'));
});

require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`)
});