const express = require("express")
const path = require("path")
const app = express()

const publicPath = path.resolve(__dirname,"./public")
app.use(express.static(publicPath))
app.use(express.urlencoded())

app.get("/", (req,res)=>{
    let file = path.join(__dirname,"./views/login.html") 
    res.sendFile(file)
})

app.get("/register",(req,res)=>{
    res.sendFile(__dirname + "/views/register.html")
})

app.get("/login", (req,res)=>{
    res.sendFile(__dirname + "/views/login.html")
})

app.post("/result-login", (req,res)=>{
    res.redirect("/")
})

app.post("/result-register", (req,res)=>{
    res.redirect("/")
})

app.listen(3000,()=>{
    console.log("Server running")
})