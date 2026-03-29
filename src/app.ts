import express from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./env";
import router from "../src/routes";
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the Pet Shop API");
});

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api", router);

export default app;
