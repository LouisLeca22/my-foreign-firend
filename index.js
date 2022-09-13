import http from 'http';
import express from 'express';
import cors from 'cors';
import * as dotenv from "dotenv";
import socketio from 'socket.io';
import socket from './socket.js';
import path from "path"
import {dirname} from "path"
import { fileURLToPath } from "url"
dotenv.config();

const port = process.env.PORT

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors());
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (_, res) {
    res.sendFile(
      path.join(__dirname, "./client/build/index.html"),
      function (err) {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  });


socket(io)

server.listen(port, () => console.log(`Server has started on port ${port}`));