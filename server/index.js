const express = require('express')
const data = require('./dummy.js')
const books = require('./books.js')
const book = require('./book.js')
const chapters = require('./chapters.js')
const questions = require('./questions.js')
const question = require('./question.js')
var cors = require('cors');

const api = express()
api.use(cors({
    origin : 'http://localhost:3000',
    methods: ["GET", "POST"],
  }));

const HOST = 'localhost'
const PORT = 8880

api.get('/', (req,res) => {
    res.send('Welcome to this awesome API!')
})

api.get('/1dxxa2310dx', (req,res) => {
    console.log('got hit with request for solution')
    res.status(200).json(data)
})

api.get('/books', (req,res) => {
    console.log('got hit with request for books')
    res.status(200).json(books)
})

api.get('/book', (req,res) => {
    console.log('got hit with request for book')
    res.status(200).json(book)
})

api.get('/chapters', (req,res) => {
    console.log('got hit with request for chapters')
    res.status(200).json(chapters)
})

api.get('/questions', (req,res) => {
    console.log('got hit with request for questions')
    res.status(200).json(questions)
})

api.get('/question', (req,res) => {
    console.log('got hit with request for questions')
    res.status(200).json(question)
})

api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}!`))