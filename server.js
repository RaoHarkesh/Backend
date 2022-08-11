let express = require("express")
const app = express()    // ye server ban gya
app.get("/sayhello",function(req,res){
    res.send("hello from the server")
})

app.post("/sayhello", function(req,res){
    res.send("post wala hello")
    console.log(req.body)
})
app.get("/saybye",function(req,res){
    res.send("bye bye")
})
app.get("/multiply/:num1/:num2",function(req,res){
    console.log(req.params)
    let num1 = req.params.num1
    let num2 = req.params.num2
    let mul=  num1*num2
    res.end("answer is",mul)
    
})

app.listen(3000,function(){
    console.log("server is started")
})
