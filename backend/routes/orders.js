const express=require('express');
const mongoose=require('mongoose')
const Users=require('../models/Users');
const Orders=require('../models/Orders');
const Deliveryworkername=require('../models/Deliveryworkername');
const Admin=require('../models/Admin');
const jwt=require('jsonwebtoken');
const fetchuser=require('../middleware/fetchuser')
const JWT_SECRET='madebykrutik'
const bcrypt=require('bcrypt');
const fs=require('fs');
const path=require('path');
const router=express.Router();
const { body, validationResult } = require('express-validator');
//Router-1:Assign a new orders
router.post('/neworder',fetchuser,
[
    body('wastetype',"Please select the waste type").exists(),
    body('amount',"Please enter the waste amount").isNumeric(),
    body('address',"Please enter the you address properly").isLength({min:8}),
    body('pdate',"enter thr valid date").exists(),
    body('ptime',"enter thr valid time").exists()
],
fetchuser,async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        res.json({errors});
    }
    try{
        const userid=req.users.id;
        const {wastetype,amount,address,pdate,ptime}=req.body;
        const createorder= await Orders.create({
            user:req.users.id,
            wastetype:wastetype,
            amount:amount,
            address:address,
            pdate:pdate,
            ptime:ptime
        }).then(()=>res.status(200).send("Your ordres has been registered succesfully")).catch((error)=>res.send(error.message));
        if(wastetype=="organicwaste"){
            const updateuserstates=await Users.findByIdAndUpdate(userid,{ $inc:{nooforganicwaste:1,amountofwaste:amount,nooforders:1,amountoforganicwaste:amount}})
            const adminupdate= await Admin.find({label:"admin"}).update({ $inc:{nooforganicwaste:1,amountofwaste:amount,nooforders:1,amountoforganicwaste:amount}})
        }
        else if(wastetype=="hazardouswaste"){
            const updateuserstates=await Users.findByIdAndUpdate(userid,{ $inc:{noofhazardouswaste:1,amountofwaste:amount,nooforders:1,amountofhazardouswaste:amount}})
            const adminupdate= await Admin.find({label:"admin"}).update({ $inc:{noofhazardouswaste:1,amountofwaste:amount,nooforders:1,amountofhazardouswaste:amount}})
        }
        else if(wastetype=="solidwaste"){
            const updateuserstates=await Users.findByIdAndUpdate(userid,{ $inc:{noofsolidwaste:1,amountofwaste:amount,nooforders:1,amountofsolidwaste:amount}})
            const adminupdate= await Admin.find({label:"admin"}).update({ $inc:{noofsolidwaste:1,amountofwaste:amount,nooforders:1,amountofsolidwaste:amount}})
        }
        else if(wastetype=="liquidwaste"){
            const updateuserstates=await Users.findByIdAndUpdate(userid,{ $inc:{noofliquidwaste:1,amountofwaste:amount,nooforders:1,amountofliquidwaste:amount}})
            const adminupdate= await Admin.find({label:"admin"}).update({ $inc:{noofliquidwaste:1,amountofwaste:amount,nooforders:1,amountofliquidwaste:amount}})
        }
        else if(wastetype=="recyclablewaste"){
            const updateuserstates=await Users.findByIdAndUpdate(userid,{ $inc:{noofrecyclablewaste:1,amountofwaste:amount,nooforders:1,amountofrecyclablewaste:amount}})
            const adminupdate= await Admin.find({label:"admin"}).update({ $inc:{noofrecyclablewaste:1,amountofwaste:amount,nooforders:1,amountofrecyclablewaste:amount}})
        }
        
    }catch(error){
        res.status(500).send(error.message);
    }
})
//Router-2:Fetch all orders of users
router.get('/fetchallorders',fetchuser,async (req,res)=>{
    try{
        const data=await Orders.find({user:req.users.id}).select("-user").select("-_id").then((data)=>res.status(200).json(data)).catch((error)=>res.status(400).send(error.message));
    }
    catch(error){
        res.status(500).send(error.message);
    }
})
//Router-3:-deleteting the order
router.delete('/cancelorder/:orderid',fetchuser,async (req,res)=>{
    try{
        let getorder=await Orders.findById(req.params.orderid).catch((error)=>res.status(400).send("no such order exist"));
        
        let cancelorder=await Orders.findById(req.params.orderid).then(async (cancelorder)=>{
            console.log(cancelorder)
            if(cancelorder.orderstatus!="Pending"){
                res.status(400).send("Your order is etiher assigned or compketefd")
            }
           if(cancelorder.wastetype=="organicwaste"){
            const adminupdate= await Admin.find({lebel:"admin"}).update({$inc:{nooforders:-1,amountofwaste:-cancelorder.amount,amountoforganicwaste:-cancelorder.amount,nooforganicwaste:-1}}).catch((error)=>res.status(400).send("something went wrong"))
            const userupdate=await Users.findById(req.users.id).update({$inc:{nooforders:-1,amountofwaste:-cancelorder.amount,amountoforganicwaste:-cancelorder.amount,nooforganicwaste:-1}}).catch((error)=>res.status(400).send("something went wrong"))
            const deliveryupdate=await Deliveryworkername.find({phone:cancelorder.deliveryworkerpn}).update({$inc:{nooforders:-1,amountofwaste:-cancelorder.amount,amountoforganicwaste:-cancelorder.amount,nooforganicwaste:-1}}).catch((error)=>res.status(400).json({error}));
            const delorder=await  Orders.deleteOne({_id:req.params.orderid}).then(()=>res.status(200).send("order deleted succesfully")).catch((error)=>res.send(400).json({error}))
        
        }
           if(cancelorder.wastetype=="hazardouswaste"){
            console.log("got hazard")
            const adminupdate= await Admin.find({label:"admin"}).update({$inc:{nooforders:-1,amountofwaste:-cancelorder.amount,amountofhazardouswaste:-cancelorder.amount,noofhazardouswaste:-1}}).catch(()=>console.log("erroe in admin"))
            const userupdate=await Users.findById(req.users.id).update({$inc:{nooforders:-1,amountofwaste:-cancelorder.amount,amountofhazardouswaste:-cancelorder.amount,noofhazardouswaste:-1}}).catch(()=>console.log("erroe in user"))
          
            const deliveryupdate=await Deliveryworkername.find({phone:cancelorder.deliveryworkerpn}).update({$inc:{nooforders:-1,amountofwaste:-cancelorder.amount,amountofhazardouswaste:-cancelorder.amount,noofhazardouswaste:-cancelorder.amount}}).catch(()=>console.log("erroe in del"))
            const delorder= await Orders.deleteOne({_id:req.params.orderid}).then(()=>res.status(200).send("order deleted succesfully")).catch((error)=>res.send(400).json({error}))
           }
           if(cancelorder.wastetype=="solidwaste"){
            const adminupdate= await Admin.update({$inc:{nooforders:-1,amountofwaste:-cancelorder.amount,amountofsolidwaste:-cancelorder.amount,noofsolidwaste:-1}}).catch((error)=>res.status(400).send("something went wrong"))
            const userupdate=await Users.findById(req.users.id).update({$inc:{nooforders:-1,amountofwaste:-cancelorder.amount,amountofsolidwaste:-cancelorder.amount,noofsolidwaste:-1}}).catch((error)=>res.status(400).send("something went wrong"))
         
            const deliveryupdate=await Deliveryworkername.find({phone:cancelorder.deliveryworkerpn}).update({$inc:{nooforders:-1,amountofwaste:-cancelorder.amount,amountofsolidwaste:-cancelorder.amount,noofsolidwaste:-1}}).catch((error)=>res.status(400).json({error}));
            const delorder= await Orders.deleteOne({_id:req.params.orderid}).then(()=>res.status(200).send("order deleted succesfully")).catch((error)=>res.send(400).json({error}))
           }
           if(cancelorder.wastetype=="liquidwaste"){
            const adminupdate= await Admin.update({$inc:{nooforders:-1,amountofwaste:-cancelorder.amount,amountofliquidwaste:-cancelorder.amount,noofliquidwaste:-1}}).catch((error)=>res.status(400).send("something went wrong"))
            const userupdate=await Users.findById(req.users.id).update({$inc:{nooforders:-1,amountofwaste:-cancelorder.amount,amountofliquidwaste:-cancelorder.amount,noofliquidwaste:-1}}).catch((error)=>res.status(400).send("something went wrong"))
           
            const deliveryupdate=await Deliveryworkername.find({phone:cancelorder.deliveryworkerpn}).update({$inc:{nooforders:-1,amountofwaste:-cancelorder.amount,amountofliquidwaste:-cancelorder.amount,noofliquidwaste:-1}}).catch((error)=>res.status(400).json({error}));
            const delorder= await Orders.deleteOne({_id:req.params.orderid}).then(()=>res.status(200).send("order deleted succesfully")).catch((error)=>res.send(400).json({error}))
           }
           if(cancelorder.wastetype=="recyclablewaste"){
            const adminupdate= await Admin.update({$inc:{nooforders:-1,amountofwaste:-cancelorder.amount,amountofrecyclablewaste:-cancelorder.amount,noofrecyclablewaste:-1}}).catch((error)=>res.status(400).send("something went wrong"))
            const userupdate=await Users.findById(req.users.id).update({$inc:{nooforders:-1,amountofwaste:-cancelorder.amount,amountofrecyclablewaste:-cancelorder.amount,noofrecyclablewaste:-1}}).catch((error)=>res.status(400).send("something went wrong"))
           
            const deliveryupdate=await Deliveryworkername.find({phone:cancelorder.deliveryworkerpn}).update({$inc:{nooforders:-1,amountofwaste:-cancelorder.amount,amountofrecyclablewaste:-cancelorder.amount,noofrecyclablewaste:-1}}).catch((error)=>res.status(400).json({error}));
            const delorder= await Orders.deleteOne({_id:req.params.orderid}).then(()=>res.status(200).send("order deleted succesfully")).catch((error)=>res.send(400).json({error}))
           }
        }).catch((error)=>res.status(400).send("something went wrong"))
    } catch(error){
        res.status(500).send(error.message);
    }
})
//Router-4: Fetch pending orders
router.get('/getpendingorders',fetchuser,async(req,res)=>{
    try{
        let pendingorder=await Orders.find({orderstatus:"Pending"}).select("-_id").select("-__v").then().catch(error=>res.status(200).json({error}));
        let assignedorder=await Orders.find({orderstatus:"Assigned"}).select("-_id").select("-__v").then((assignedorder)=>res.status(200).json({assignedorder,pendingorder})).catch(error=>res.status(200).json({error}));

    }
    catch(error){
        res.status(500).send(error.message);
    }
})
//Router-5: Fetch all completed orders
router.get('/getcompletedorders',fetchuser,async(req,res)=>{
    try{
        let pendingorder=await Orders.find({orderstatus:"Completed"}).select("-_id").select("-__v").then((pendingorder)=>res.status(200).json({pendingorder})).catch(error=>res.status(200).json({error}));
    }
    catch(error){
        res.status(500).send(error.message);
    }
})
module.exports=router