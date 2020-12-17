import express from "express";
import morgan from "morgan";
import path from "path";
import globaRouter from "./router/globalRouer";
import dotenv from "dotenv";
dotenv.config();
import connect from "../db/mongo";

const PORT = 7777;

const app = express();

app.use(morgan(`dev`));

app.use(express.static(path.join(__dirname, `/assets`)));

connect(); // DB Connect

app.set("view engine", "pug");

app.get("/", globaRouter);
app.get("/book", globaRouter);

app.listen(PORT, () => {
  console.log(` ✅ ${PORT} Server Start`);
});

// pug 에서 데이터 갖고올 때 each -> for each 인데 each 라고 쓴것이다. 그냥 포문.
// each data in bookList : bookList 라는 아이를 data 안에 하나씩 넣는다.
