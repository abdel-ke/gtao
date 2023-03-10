const express = require('express');
const router = express.Router();
const db = require('./../help/database.js');

router.get('/', async (req, res) => {
    const data = await db.getData();
    res.render('girl/money.ejs', { data });
})

router.post('/', async (req, res) => {
    // if (!req.body.start || !req.body.end) {
    //     log("inputs required");
    //     // res.redirect('/');
    //     router.redirect('/');
    // }
    // else {
    //     let lastOne = await sqlite.getLastOne();
    //     let current = parseInt(req.body.end) - parseInt(req.body.start);
    //     if (!lastOne)
    //         sqlite.add(req.body.start, req.body.end, current, req.body.current);
    //     else {
    //         !lastOne.total ? lastOne.total = 0 : lastOne.total;
    //         const total = parseInt(lastOne.total) + parseInt(current);
    //         sqlite.add(req.body.start, req.body.end, current, total);
    //     }
    //     // res.redirect('/');
    //     router.redirect('/');
    // }
    console.log("post from girl page");
    router.redirect('/');
})

module.exports = router;