let express = require("express");
let routertastx = express.Router();
let tasks = require("../data/tasks");

// Endpoint para obtener todas las tareas o filtrar por texto
routertastx.get("/", (req, res) => {
    // Recupera el parámetro 'text' desde la query string
    let text = req.query.text;

    // Si se proporciona un texto, filtra las tareas
    if (text) {
        let tasksWithText = tasks.filter((task) => task.text.toLowerCase().includes(text.toLowerCase()));

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
routertastx.get("/:id", (req, res) => {
    let id = parseInt(req.params.id); // Convertimos el ID a entero

    // Buscar la tarea por ID
    let task = tasks.find((t) => t.id === id);

    // Si no se encuentra la tarea, devuelve un error
    if (!task) {
        return res.status(404).send({ error: "Tarea no encontrada" });
    }

    // Devuelve la tarea encontrada
    res.send(task);
});

// Exporta el router para ser utilizado en otros módulos
module.exports = routertastx;
