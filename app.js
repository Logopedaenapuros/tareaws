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
    // Recupera el parámetro 'text' desde la query string
    let text = req.query.text;

    // Si se proporciona un texto, filtra las tareas
    if (text !== undefined) {
        let tasksWithText = tasks.filter((task) => task.text.indexOf(text) !== -1);

        // Si no se encuentran tareas que coincidan, responde con un mensaje claro
        if (tasksWithText.length === 0) {
            return res.status(404).send({ error: "No se encontraron tareas que coincidan con el texto proporcionado." });
        }

        // Devuelve las tareas que coincidan con el texto
        return res.send(tasksWithText);
    }

    // Si no se proporciona texto, devuelve todas las tareas
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
    // Recupera el parámetro 'email' desde la query string
    let email = req.query.email;
    // Si se proporciona un email, filtra los usuarios
    if (email !== undefined) {
        let usersWithEmail = users.filter((user) => user.email === email);
        // Si no se encuentra ningún usuario con el email dado, responde con un mensaje claro
        if (usersWithEmail.length === 0) {
            return res.status(404).send({ error: "Usuario no encontrado con el email proporcionado" });
        }
        // Devuelve los usuarios encontrados con el email
        return res.send(usersWithEmail);
    }
    // Si no se proporciona email, devuelve todos los usuarios
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
