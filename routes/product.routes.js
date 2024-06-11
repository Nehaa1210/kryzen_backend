const express = require("express");
const Product = require("../models/product");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, price, category, image, rating } = req.body;
    const newProduct = await Product.create({
      title,
      price,
      category,
      image,
      rating,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Failed to add product" });
  }
});

router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price, category, image, rating } = req.body;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    product.title = title;
    product.price = price;
    product.category = category;
    product.image = image;
    product.rating = rating;
    await product.save();
    res.json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Failed to update product" });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    await product.destroy();
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

router.get("/category/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Product.findAll({ where: { category } });
    res.json(products);
  } catch (error) {
    console.error("Error filtering products by category:", error);
    res.status(500).json({ error: "Failed to filter products by category" });
  }
});

router.get("/sort/price/:order", async (req, res) => {
  try {
    const { order } = req.params;
    const products = await Product.findAll({
      order: [["price", order === "asc" ? "ASC" : "DESC"]],
    });
    res.json(products);
  } catch (error) {
    console.error("Error sorting products by price:", error);
    res.status(500).json({ error: "Failed to sort products by price" });
  }
});

module.exports = router;
