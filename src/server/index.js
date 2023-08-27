import express from "express";
import { createServer } from "http";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 3000;
const httpServer = createServer(app);
// Inicio parseadores
app.use(express.json());
app.use(cors());
app.use(cookieParser());
// Definir la carpeta del front-end
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../client")));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// todo: Inicializar servidor en tiempo real
