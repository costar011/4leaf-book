import express from "express";
import morgan from "morgan";
import path from "path";
import globaRouter from "./router/globalRouer";

const PORT = 7777;

const app = express();

app.use(morgan(`dev`));

app.use(express.static(path.join(__dirname, `/assets`)));

app.set("view engine", "pug");

app.get("/", globaRouter);

app.listen(PORT, () => {
  console.log(` ✅ ${PORT} Server Start`);
});
