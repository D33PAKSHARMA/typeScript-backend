import express from "express";
import UserRoutes from "./routes/authRoutes.js";
import morgan from "morgan";
import cors from "cors";
import env from "dotenv";
env.config();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
//all routes
app.use("/api/v1", UserRoutes);
app.get("/", (req, res) => {
    try {
        res.send("Hey from backend");
    }
    catch (error) {
        console.log(error);
    }
});
export default app;
