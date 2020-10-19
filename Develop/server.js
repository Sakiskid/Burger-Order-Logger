const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 8080;
const app = express();

app.engine('handlebars', exphbs({ defaultLayout: "main "}));
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(err => {
    if(err) throw err;
    console.log("Listening on port " + PORT);
})