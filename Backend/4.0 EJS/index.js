import express from 'express';
import ejs from 'ejs';
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    const date = new Date();
    const data = { day: date.getDay() };
    res.render('index.ejs', data);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
