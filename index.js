const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.use(express.urlencoded({extends:true}));
// app.use()

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.set(express.static(path.join(__dirname,"views")));

let posts = [
    {
        username:"shukla",
        content: "preparing for gate"
    },

    {
        username:"dwivedi",
        content: "preparing for placement"
    },

    {
        username:"Sunny",
        content:" just wanna take degree"
    },

    {
        username:"bhashkar",
        content: "preparing off campus placement"
    }
]

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})


app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    // let {username,content}=req.body;
    // posts.push={username,content};
    console.log(req.body);
    res.send("post is working")
    // res.render("index.ejs",{posts)});
})
