let  express = require ("express")
let app = express();
 
let task = [
    {id: 1 , text: "hecer la compra"},
    {id: 2 , text: "hecer la comida"},
    {id: 3 , text: "pagar la compra"},
    {id: 4 , text: "hecer la cena"},
]
let users = [
    {id:1, email: "user1" , password: "user1"},
    {id:2, email: "user2" , password: "user2"},
    {id:3, email: "user3" , password: "user3"},
    {id:4, email: "user4" , password: "user4"},
]
app.get("/task", (req , res)=>{
    res.send(task)
})
app.get("/user", (req , res)=>{
    res.send(users)
})
app.listen(8081, ()=> {
    console.log("sercidor activo")
})