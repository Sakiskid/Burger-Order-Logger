const express = require('express');
const exphbs = require('express-handlebars');

const PORT = proccess.env.PORT || 8080;
const app = express();

app.engine('handlebars', exphbs({ defaultLayout: "main "}));
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());