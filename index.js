const express = require('express');
const app = express();
const hbs = require('express-handlebars');

app.set("view engine", "handlebars");

app.use("/bootstrap", express.static(`${__dirname}/node_modules/bootstrap/dist`));
app.use('/jquery', express.static(`${__dirname}/node_modules/jquery/dist/`));
app.use(express.static(`${__dirname}/public`));

