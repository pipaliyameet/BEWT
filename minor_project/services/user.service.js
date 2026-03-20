const { getAll, getById, insert, update, deleteById, getByUserName } = require("../models/user.model");
var jwt = require('jsonwebtoken');

async function getAllUsers(){
    const data =await getAll();
    if(data){
        return {
            error:false,
            data,
            message : "user fatch success"
        };
    }else{
        return {
            error:true,
            message : "some error occured while fetching the users"
        };
    }
}

async function checkLogin(formData){
    const data =await getByUserName(formData.UserName);
    if(data){
        if(data.Password===formData.Password){
            var token = jwt.sign(data, 'shhhhh');
            return {
                error:false,
                data:token,
                message : "user fatch success"
            };
        }else{
            return {
                error:true,
                message : "userName/Password does not match"
            }
        }
    }else{
        return {
            error:true,
            message : "userName/Password does not match"
        };
    }
}

async function getUserById(id){
    const data =await getById(id);
    if(data){
        return {
            error:false,
            data,
            message : "user fatch success"
        };
    }else{
        return {
            error:true,
            message : "some error occured while fetching the users"
        };
    }
}

async function insertUser(formData){
    const data =await insert(formData);
    if(data){
        return {
            error:false,
            data,
            message : "user add success"
        };
    }else{
        return {
            error:true,
            message : "some error occured while fetching the users"
        };
    }
}

async function updateUser(id,formData){
    const data = await update(id,formData);
    if(data){
        return {
            error:false,
            data,
            message : "user update success"
        };
    }else{
        return {
            error:true,
            message : "some error occured while fetching the users"
        };
    }
}

async function deleteUser(id){
    const data = await deleteById(id);
    if(data){
        return {
            error:false,
            data,
            message : "user delete success"
        };
    }else{
        return {
            error:true,
            message : "some error occured while fetching the users"
        };
    }
}

module.exports = {getAllUsers, getUserById, insertUser, updateUser, deleteUser, checkLogin};