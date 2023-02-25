import express from "express";
import cors from "cors";
import data from "./data.js";
import "dotenv/config";

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(port, () =>
  console.log(`app listening on port http://localhost:${port}`)
);
