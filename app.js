let express = require("express");
let app = express();

let tasks = [
    { id: 1, text: "hacer la compra" },
    { id: 2, text: "hacer la comida" },
    { id: 3, text: "pagar la compra" },
    { id: 4, text: "hacer la cena" },
];
let users = [
    { id: 1, email: "user1", password: "user1" },
    { id: 2, email: "user2", password: "user2" },
    { id: 3, email: "user3", password: "user3" },
    { id: 4, email: "user4", password: "user4" },
];

// Endpoint para obtener todas las tareas
app.get("/task", (req, res) => {
    res.send(tasks);
});

// Endpoint para obtener una tarea específica por ID
app.get("/task/:id", (req, res) => {
    let id = parseInt(req.params.id); // Convertimos el ID a entero
    let task = tasks.find((t) => t.id === id);
    if (!task) {
        return res.status(404).send({ error: "Tarea no encontrada" });
    }
    res.send(task);
});

// Endpoint para obtener todos los usuarios
app.get("/user", (req, res) => {
    res.send(users);
});

// Endpoint para obtener un usuario específico por ID
app.get("/user/:id", (req, res) => {
    let id = parseInt(req.params.id); // Convertimos el ID a entero
    let user = users.find((u) => u.id === id);
    if (!user) {
        return res.status(404).send({ error: "Usuario no encontrado" });
    }
    res.send(user);
});

// Servidor activo en el puerto 8081
app.listen(8081, () => {
    console.log("Servidor activo en http://localhost:8081");
});
