let express = require("express");
let app = express();
let tasks = require("./data/tasks")
let users = require ("./data/users")
let routertastx = require ("./routers/routerTasks")


let routeruser = require("./routers/routerUsers");
app.use("/users", routeruser);

app.use("/tasks", routertastx)



// Servidor activo en el puerto 8081
app.listen(8081, () => {
    console.log("Servidor activo en http://localhost:8081");
});
