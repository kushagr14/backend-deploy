require('dotenv').config();

const express = require('express')
const app = express()
// const port= 3000

app.get("/", (req,res) => {
    res.send("Sending response")
})

app.get('/login', (req, res) => {
    res.send("<h1>This is login page</h1>")
})

app.get('/youtube', (req,res) => {
    res.send(`<h2>Welcome to my Youtube</h2>`)
})

app.listen(process.env.PORT, () => {
    console.log(`using the port: ${process.env.PORT}`)
})