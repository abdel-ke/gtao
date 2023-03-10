const express = require('express');
const girlRouter = require('./routes/girl')
const app = express();

app.set('view-engine', 'ejs');  // convert an ejs to html
app.use(express.urlencoded({ extended: false })); // to get req.body from html
app.use(express.static('public')); // This will allow us to easily access our statics files such as css, js and images

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.post('/', (req, res) => {
    console.log("post from Home page");
})


app.use('/girl', girlRouter);
app.listen(3000, () => {
    console.log("server listening");
});
