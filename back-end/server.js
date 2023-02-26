import express from "express";
import cors from "cors";
import "dotenv/config";
import { ProductController } from "./controllers/controllers.js";

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/api/products", ProductController.getProducts);

app.get("/api/products/slug/:slug", ProductController.getProduct);

app.get("/api/products/:id", ProductController.getProductById);

app.listen(port, () =>
  console.log(`app listening on port http://localhost:${port}`)
);
