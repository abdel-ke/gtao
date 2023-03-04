const express = require('express');
const fs = require('fs');

const sqlite = require('./help/database.js');

const app = express();
var bodyParser = require("body-parser");

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

let data;

app.get('/', (req, res) => {
    // const jsonData = fs.readFileSync('config/data.json');
    const data2 = sqlite.getData();
    console.log("data2: ", data2);
    // data = JSON.parse(jsonData);
    // res.render('index.ejs', { data2 });
})

app.post('/', (req, res) => {
    if (!req.body.start || !req.body.end || !req.body.current || !req.body.total)
        console.log("chi haja khawya, something is empty");
    else {
        console.log("data: ", data);
        if (data) {
            data.push({
                start: parseInt(req.body.start),
                end: parseInt(req.body.end),
                current: parseInt(req.body.current),
                total: parseInt(req.body.total),
            });
            fs.writeFileSync('config/data.json', JSON.stringify(data));
        }
        else
            console.log("data was empty!!");
    }
})

app.listen(3000, () => {
    console.log("server listening");
});
