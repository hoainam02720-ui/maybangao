
const express = require("express");

const app = express();

app.use(express.json());

let may1 = "WAIT";

app.get("/", (req, res) => {
  res.send("Máy bán gạo online 😄");
});

app.get("/may1", (req, res) => {
  res.send(may1);
});

app.post("/webhook", (req, res) => {

  console.log(req.body);

  may1 = "OPEN";

  setTimeout(() => {
    may1 = "WAIT";
  }, 5000);

  res.send("OK");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Máy chủ đang chạy");
});
