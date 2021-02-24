const express = require("express");
const router = express.Router();

const student = require("../models/student.js");

router.get("/", async (req, res) => {

    try {
        const students = await student.find();
        res.json(students);
    } catch (err) {
        res.send("Error - " + err);
        console.log("ERrror....");
    }

})
router.get("/:id", async (req, res) => {

    try {
        const stud = await student.findById(req.params.id);
        res.json(stud);
    } catch (err) {
        res.send("Error - " + err);
        console.log("ERrror....");
    }

})

router.post("/", async (req, res) => {

    console.log("inside post");

    try {
        console.log("inside post...");
        let stu =  new student({
            name: req.body.name,
            rollNo: req.body.rollNo,
            address: req.body.address
    
        })
       let s1 = await stu.save();
       res.json(s1);
       console.log("inside post 2....");
       

    } catch (err) {
        res.send(err);
    }
    //console.log(s1);

})

router.patch("/:id" , async(req,res) => {
        try{
            const st = await student.findById(req.params.id);
            st.address = req.body.address;
            const s2 = await st.save();
            res.json(s2);
        } catch(err){
            res.send(err);
        }
})

router.delete("/:id", async(req,res) =>{
    try{
        const st = await student.findById(req.params.id);
        st.remove();
        res.send("Deleted");
        res.send(student);

    } catch(err){
            res.send(err);
    }
})

module.exports = router;