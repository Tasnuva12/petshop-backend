import express from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./env";
import router from "./routes";
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api", router);

export default app;
