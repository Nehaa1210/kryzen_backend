require("dotenv").config();
const express = require("express");
const sequelize = require("./config/dbConfig");
const productRouter = require("./routes/product.routes");
const userRouter = require("./routes/user.routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", productRouter);
app.use("/users", userRouter);

sequelize.sync().then(() => {
  app.listen(3000, async () => {
    try {
      await sequelize.authenticate();
      console.log("Database connected");
    } catch (error) {
      console.log("Error in connecting to the database.");
      console.log(error);
    }
  });
});
