var express = require('express');
var fs = require('fs');
var router = express.Router();

// let books = require('../data/books.json');

router.get('/', function(req, res, next) {
    res.render('add');
});

router.post('/add', (req, res) => {
    let form = req.body;
    books.push(form);
    fs.writeFileSync('./data/books.json', JSON.stringify(books));
    res.end();
});

router.delete('/delete/:id', (req, res) => {
    let id = req.params.id;
    books.splice(id, 1);
    fs.writeFileSync('./data/books.json', JSON.stringify(books));
    res.end();
});

module.exports = router;
