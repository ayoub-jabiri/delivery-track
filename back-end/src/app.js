import express from "express";
import deliveryRoutes from "./routes/deliveryRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.use("/api/deliveries", deliveryRoutes);

app.use(errorHandler);

export default app;
