const express = require("express");
const { SpeechModal } = require("../model/Speech.modal");

const speechRoutes = express.Router();

speechRoutes.get("/", async(req,res)=>{
    try{
        const speeches = await SpeechModal.find();
        res.status(200).send({speeches});
    }catch(err){
        res.status(500).send({"error":err})
    }
})

speechRoutes.post("/create", async(req,res)=>{

    try{
        const speech = new SpeechModal(req.body)
        await speech.save();
    
        res.status(201).send({"msg":"New speech has been Added","new speech":req.body})

    }catch(err){
        res.status(500).send({"error":err})
    }
})


module.exports ={speechRoutes}