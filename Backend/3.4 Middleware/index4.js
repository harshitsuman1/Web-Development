import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser  from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit', (req, res) => {
  const street = req.body.street;
  const pet = req.body.pet;

  // Send a dynamic HTML page showing the submitted data
  res.send(`
    <h1>Your Band Name!</h1>
    <h2>${street}${pet}</h2>
  `);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
