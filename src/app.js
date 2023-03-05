const express = require('express');
// const fs = require('fs');

const sqlite = require('./help/database.js');

const app = express();
// var bodyParser = require("body-parser");
const { log } = require('console');

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// let data;

app.get('/', async (req, res) => {
    const data = await sqlite.getData();
    res.render('index.ejs', { data });
})

app.post('/', async (req, res) => {
    if (!req.body.start || !req.body.end) {
        log("chi haja khawya, something is empty");
        res.redirect('/');
    }
    else {
        let lastOne = await sqlite.getLastOne();
        let current = parseInt(req.body.end) - parseInt(req.body.start);
        if (!lastOne)
            sqlite.add(req.body.start, req.body.end, current, req.body.current);
        else {
            !lastOne.total ? lastOne.total = 0 : lastOne.total;
            const total = parseInt(lastOne.total) + parseInt(current);
            sqlite.add(req.body.start, req.body.end, current, total);
        }
        res.redirect('/');
    }
})

app.listen(3000, () => {
    log("server listening");
});
