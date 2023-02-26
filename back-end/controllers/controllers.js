import data from "../data.js";

export class ProductController {
  static getProducts(req, res) {
    res.send(data.products);
  }

  static getProduct(req, res) {
    const { slug } = req.params;
    const product = data.products.find((p) => p.slug === slug);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send("Product not found" );
    }
  }
  static getProductById(req, res) {
    const { id } = req.params;
    const product = data.products.find((p) => p._id === id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send("Product not found" );
    }
  }
}
