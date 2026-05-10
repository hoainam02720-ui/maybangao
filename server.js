const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let donhang = [];

app.get("/", (req, res) => {
  res.send(`
    <h1>Máy Bán Gạo 🌾</h1>

    <form action="/dat" method="POST">

      <p>Tên:</p>
      <input name="ten" />

      <p>Số điện thoại:</p>
      <input name="sdt" />

      <p>Địa chỉ giao:</p>
      <input name="diachi" />

      <p>Số kg gạo:</p>
      <input name="soluong" />

      <br><br>

      <button type="submit">
        ĐẶT GẠO
      </button>

    </form>
  `);
});

app.post("/dat", (req, res) => {

  donhang.push(req.body);

  console.log("Có đơn mới:");
  console.log(req.body);

  res.send("Đặt gạo thành công 😄");

});

app.get("/donhang", (req, res) => {

  res.json(donhang);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log("Máy chủ đang chạy");

});
