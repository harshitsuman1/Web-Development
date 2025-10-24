import express from "express";

const app = express();
const port = 3000;

function logger(request , respond , next_){
  console.log(request.method);
  console.log(request.url);
  next_();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
