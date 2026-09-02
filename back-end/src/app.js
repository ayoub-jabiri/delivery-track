import express from "express";
import deliveryRoutes from "./routes/deliveryRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
import cors from "cors";

app.use(cors());

app.use(express.json());

app.use("/api/deliveries", deliveryRoutes);

app.use(errorHandler);

export default app;
