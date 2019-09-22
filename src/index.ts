import "./env";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import http from "http";
import socketio from "socket.io";
import { subscribe } from "./test_hw";

const { PORT = 3000 } = process.env;

const app = express();
const server = new http.Server(app);
const io = socketio(server);

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.disable("x-powered-by");

const unsub = subscribe(info => {
  console.log({ info });
  io.emit("sensors", { info });
}, 1000);

server.listen(PORT, () => console.log("> api listening in port", PORT));
