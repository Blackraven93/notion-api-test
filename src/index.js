import express from "express";
import dotenv from "dotenv";
import { getPage } from "./notion";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const handleNotion = async (req, res) => {
  const blocks = await getPage();
  res.json(blocks);
};

app.get("/pages", handleNotion);

const handleListen = () => {
  console.log(`Server Listening on the ${PORT} http://localhost:${PORT}/`);
};

app.listen(PORT, handleListen);
