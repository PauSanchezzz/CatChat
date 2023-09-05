import express from "express";
import { createServer } from "http";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import generalRoutes from "./routes/general.routes.js";
import { Server } from "socket.io";

const app = express();
const port = process.env.PORT || 3000;
const httpServer = createServer(app);
// Inicio parseadores

app.use(express.json());
app.use(cookieParser());
// Definir la carpeta del front-end
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../client")));
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(generalRoutes);
const io = new Server(httpServer);

//Definiendo los namespaces
const tuxedoTeam = io.of("Tuxedo");
const bombayTeam = io.of("Bombay");
const siamesTeam = io.of("Siames");
const calicoTeam = io.of("Calico");
const careyTeam = io.of("Carey");

tuxedoTeam.on("connection", (socket) => {
  socket.on("send-message", ({ user, message }) => {
    tuxedoTeam.emit("sendToAll", { user, message });
  });
});
bombayTeam.on("connection", (socket) => {
  socket.on("send-message", ({ user, message }) => {
    bombayTeam.emit("sendToAll", { user, message });
  });
});
siamesTeam.on("connection", (socket) => {
  socket.on("send-message", ({ user, message }) => {
    siamesTeam.emit("sendToAll", { user, message });
  });
});
calicoTeam.on("connection", (socket) => {
  socket.on("send-message", ({ user, message }) => {
    calicoTeam.emit("sendToAll", { user, message });
  });
});
careyTeam.on("connection", (socket) => {
  socket.on("send-message", ({ user, message }) => {
    careyTeam.emit("sendToAll", { user, message });
  });
});
httpServer.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
