import express from "express";
import bodyParser from "body-parser";
import path from "path"; 

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static( "public"));

var newItems=[]
var newWorkItems = [];
var activeClass=""

app.get("/", (req, res) => {
  res.render("index.ejs", { activeClass: "today",newItems:newItems});
  activeClass="today"
 
});

app.get("/work", (req, res) => {
  res.render("work.ejs", { activeClass: "work" ,newWorkItems:newWorkItems});
  activeClass = "work";
});

app.post("/create",(req,res)=>{
 
 if(activeClass==="today"){
   var newItem = req.body.item;
   newItems.push(newItem);

 res.redirect("/");
 }
 else{
  var newWorkItem = req.body.item;
  newWorkItems.push(newWorkItem);

   res.redirect("/work");
 } 

})


app.listen(3000, () => {
  console.log(`Server running on port ${port}`);
});
