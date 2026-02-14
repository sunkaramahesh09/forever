import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongoDb.js";
import connetcloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//App Config

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connetcloudinary();

//middlewares

app.use(express.json());
app.use(cors());

//api endpoints

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use('/api/orders', orderRouter)

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log(`server started on ${port} port`));
