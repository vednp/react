const mongoose = require("mongoose");
const Task = require("./schema");

mongoose.connect("mongodb://127.0.0.1:27017/taskdb");

const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001
console.log("App listen at port 3001");
app.use(express.json());
app.use(cors());

app.get("/register", async (req, res) => {
  const data = await Task.find({});
  res.send(data);
});

app.delete("/register/:id", async (req, res) => {
  try {
    const response = await Task.findByIdAndDelete(req.params.id);
    if(!response){
        res.status(404).send();
    }
    res.send(response)
  } catch (error) {
    res.status(500).send()
    console.log(error);
  }
});

app.post("/register", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.send(task)
  } catch (e) {
    res.send("Something Went Wrong");
  }
});
// app.get("/register", async (req, resp) => {
//     try {
//         const task = await Task.create(req.body);
//         console.log(req.body);
//     } catch (e) {
//         resp.send("Something Went Wrong");
//     }
// });

app.listen(port);
