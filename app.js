
const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb://localhost/StudentDB';

const app = express();

mongoose.connect(url, {useNewUrlParser: true});

const studentsRouter = require("./routes/students.js");
const con = mongoose.connection;

app.use(express.json());

app.use("/students", studentsRouter);

con.on("open", () => {
    console.log("Connected...");
})
app.listen(9000, ()=> {
    console.log(`Server started at port no 9000`);
})

console.log("Sdfsdf");