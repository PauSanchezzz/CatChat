import { Server } from "socket.io";
export const realTimeServer = (httpServer) => {
  const io = new Server(httpServer);
  const bombayTeam = io.of("bombay");
  const tuxedoTeam = io.of("tuxedo");
  const siamesTeam = io.of("siames");
  const calicoTeam = io.of("calico");
  const careyTeam = io.of("carey");

  bombayTeam.on("conection", (socket) => {
    console.log(socket.id);
    socket.on("send-message", ({ message, users }) => {
      bombayTeam.emit("message", message, users);
      console.log("message to bombay", message);
      console.log("user aparte", users);
    });
  });

  tuxedoTeam.on("conection", (socket) => {
    console.log(socket.id);
    socket.on("send-message", ({ message, users }) => {
      tuxedoTeam.emit("message", message, users);
      console.log("message to tuxedo", message);
      console.log("user aparte", users);
    });
  });

  siamesTeam.on("conection", (socket) => {
    console.log(socket.id);
    socket.on("send-message", ({ message, users }) => {
      siamesTeam.emit("message", message, users);
      console.log("message to siames", message);
      console.log("user aparte", users);
    });
  });

  calicoTeam.on("conection", (socket) => {
    console.log(socket.id);
    socket.on("send-message", ({ message, users }) => {
      calicoTeam.emit("message", message, users);
      console.log("message to calico", message);
      console.log("user aparte", users);
    });
  });

  careyTeam.on("conection", (socket) => {
    console.log(socket.id);
    socket.on("send-message", ({ message, users }) => {
      careyTeam.emit("message", message, users);
      console.log("message to carey", message);
      console.log("user aparte", users);
    });
  });
};
