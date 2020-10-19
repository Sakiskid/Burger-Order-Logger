const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burger_controller.js')

const PORT = process.env.PORT || 8080;
const app = express();

app.engine('handlebars', exphbs({ defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})