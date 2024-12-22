let express = require("express");
let routeruser = express.Router();
let users = require("../data/users");

// Endpoint para obtener todos los usuarios o filtrar por email
routeruser.get("/", (req, res) => {
    // Recupera el parámetro 'email' desde la query string
    let email = req.query.email;

    // Si se proporciona un email, filtra los usuarios
    if (email) {
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
routeruser.get("/:id", (req, res) => {
    let id = parseInt(req.params.id); // Convertimos el ID a entero

    // Buscar el usuario por ID
    let user = users.find((u) => u.id === id);

    // Si no se encuentra el usuario, devuelve un error
    if (!user) {
        return res.status(404).send({ error: "Usuario no encontrado" });
    }

    // Devuelve el usuario encontrado
    res.send(user);
});

// Exporta el router para ser utilizado en otros módulos
module.exports = routeruser;
