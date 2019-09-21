import "./env";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import { apiRouter } from "./routes";

const app = express();

const { PORT = 3000 } = process.env;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.disable("x-powered-by");

app.use("/api", apiRouter);

app.listen(PORT, () => console.log("> api listening"));
