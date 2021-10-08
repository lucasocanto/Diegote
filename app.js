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

app.listen(3030,()=>{
    console.log("Server running")
})