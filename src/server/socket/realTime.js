import { Server } from "socket.io";
export const realTimeServer = (httpServer) => {
  const io = new Server(httpServer);
};
