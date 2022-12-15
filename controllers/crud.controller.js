const express = require('express');
const crudModel = require("../models/crud.model");
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const addNewUserCtrl = (req , res )=>{
    const { name , email , mobile , city , state }  = req.body;

    const data =  new  crudModel({ name : name , email : email , mobile : mobile , city : city , state : state });

    data.save((err , result )=>{
        if(err)
        {
            return res.status(400).json({ status : 400 , error : err })
        }
        return res.status(201).json({ status : 201 , msg  : "New User added" , data : result })
    })
}


const listOfAllUsersCntrl = (req , res )=>{
    crudModel.find((err , result )=>{
        if(err)
        {
            return res.status(400).json({ status : 400 , error : err })
        }
        return res.status(201).json({ status : 201 , msg  : "All Users" , data : result })
    })
}


const getUserDetailCntrl = (req , res )=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    crudModel.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving crudModel :' + JSON.stringify(err, undefined, 2)); }
    });
}


const updateUserCntrl = (req , res )=>{
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userMobile = req.body.mobile;
    const userCity = req.body.city;
    const userState = req.body.state;

    const userData = {

        name: userName,
        email: userEmail,
        mobile: userMobile,
        city: userCity,
        state: userState

    };
    const crudId = req.params.id;
    console.log(crudId);
    crudModel.findByIdAndUpdate(crudId , userData,  (err ,result )=>{
        if(err)
        {
            if(err.name === "CastError")
            {
                return res.status(403).json({ status : 403 ,msg  : "problem with id", error : err })
            }
            return res.status(400).json({ status : 400 , error : err })
        }
        // console.log(res.status);
        return res.status(200).json({ status : 200 , msg  : "User Updated" , data : result })
    })
}



const deleteUserCntrl = (req , res )=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    crudModel.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in crudModel Delete :' + JSON.stringify(err, undefined, 2)); }
    });

}

module.exports = { addNewUserCtrl, listOfAllUsersCntrl, deleteUserCntrl, getUserDetailCntrl, updateUserCntrl }











