const express = require('express');

const app = express();
const Port = 3000;

app.get('/', (req, res) => {
    res.send("Hello world")
})
app.get('/home', (req, res) => {
    res.send("This is the home page")
})
app.get('/login', (req, res) => {
    res.send("Login ")
})
app.get('/logout', (req, res) => {
    res.send("Logout ")
})


app.listen(Port, () => {
    console.log(`Listening on port ${Port}`)
})