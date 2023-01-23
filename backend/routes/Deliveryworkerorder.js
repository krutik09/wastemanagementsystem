const express=require('express');
const Orders=require('../models/Orders');
const Deliveryworkername=require('../models/Deliveryworkername');
const fetchdeliveryworker=require('../middleware/fetchdeliveryworker')
const router=express.Router();

//Route:1 to get assigned order
router.get('/fetchalldelorders',fetchdeliveryworker,async (req,res)=>{
    try{
        //getting phone number of delivery worker from id
        const getphone= await Deliveryworkername.findById(req.Deliveryworkername.id).select("phone").select("-_id").then((getphone)=>{
            const data= Orders.find({deliveryworkerpn:getphone.phone}).select("-user").select("-_id").then((data)=>res.status(200).json(data)).catch((error)=>res.status(400).send(error.message));
        }).catch((error)=>res.status(400).json({error}));
        
    }
    catch(error){
        res.status(500).send(error.message);
    }
})
//Route:2 get all poedning orders 
router.get('/fetchallpendingdelorders',fetchdeliveryworker,async (req,res)=>{
    try{
        //getting phone number of delivery worker from id
        const getphone= await Deliveryworkername.findById(req.Deliveryworkername.id).select("phone").select("-_id").then((getphone)=>{
            const data= Orders.find({deliveryworkerpn:getphone.phone,orderstatus:"Assigned"}).select("-user").select("-_id").then((data)=>res.status(200).json(data)).catch((error)=>res.status(400).send(error.message));
        }).catch((error)=>res.status(400).json({error}));
        
    }
    catch(error){
        res.status(500).send(error.message);
    }
})
router.get('/fetchallcompleteddelorders',fetchdeliveryworker,async (req,res)=>{
    try{
        //getting phone number of delivery worker from id
        const getphone= await Deliveryworkername.findById(req.Deliveryworkername.id).select("phone").select("-_id").then((getphone)=>{
            const data= Orders.find({deliveryworkerpn:getphone.phone,orderstatus:"Completed"}).select("-user").select("-_id").then((data)=>res.status(200).json(data)).catch((error)=>res.status(400).send(error.message));
        }).catch((error)=>res.status(400).json({error}));
        
    }
    catch(error){
        res.status(500).send(error.message);
    }
})
//Router:4 set assigned order complete
router.post('/setordercomplete/:orderId',fetchdeliveryworker,async (req,res)=>{
    try{
        //setting order complted
        const completeorder=await Orders.findByIdAndUpdate(req.params.orderId,{$set:{orderstatus:"Completed"}}).then(()=>res.status(200).send("Order status updated")).catch((error)=>res.status(400).json({error}));
    }
    catch(error){
        res.status(500).send(error.message);
    }
})
module.exports=router;