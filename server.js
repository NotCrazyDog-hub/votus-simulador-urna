const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

const app = express();
const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

// Servir a pasta de arquivos
app.use("/assets", express.static(path.join(__dirname, "assets")));

// Tela da urna (tablet)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "index.html"));
});

// Teclado (celular)
app.get("/mobile", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "mobile.html"));
});

// WebSocket
wss.on("connection", (socket) => {
    console.log("Dispositivo conectado.");

    socket.on("message", (message) => {
        console.log("Comando recebido:", message.toString());

        // Envia o comando para os outros dispositivos conectados
        wss.clients.forEach((client) => {
            if (
                client !== socket &&
                client.readyState === WebSocket.OPEN
            ) {
                client.send(message.toString());
            }
        });
    });

    socket.on("close", () => {
        console.log("Dispositivo desconectado.");
    });
});

// Porta do servidor
const PORT = process.env.PORT || 10000;

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor funcionando na porta ${PORT}`);
});