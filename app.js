const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");


app.set('view engine', 'hbs');
app.set('views', 'html')

app.get('/', (req, res) => {
    res.send('root end point');
});

app.get('/htmlfile', (req, res) => {

    const filePath = path.join(__dirname, "html/demo.html");
    res.sendFile(filePath);

});

app.get('/hbsdemo', (req, res) => {
    const student = {
        name: "Ramu",
        age: 14,
        class: "9"
    };
    res.render('demo', { s: student });

});

app.listen(4000, () => {
    console.log('server started at 4000');
});