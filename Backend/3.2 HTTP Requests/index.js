import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send("Hello World");
})
app.get('/contact',(req, res) => {
    res.send("Phone Number: 7986732128");
})
app.get('/about',(req, res) => {
    res.send("I am a software engineer");
})
app.listen(3000);