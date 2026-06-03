import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', (req, res) => {
    const secret = req.body.password;
    if (secret === 'ILoveProgramming') {
        res.sendFile(__dirname + '/public/secret.html');
    } else {
        res.redirect('/');
    }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});     