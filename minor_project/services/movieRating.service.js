const { getAll, getByID, add, edit, deleteMr } = require("../models/movieRating.model");

async function getAllMR(){
    const data = await getAll();
    if(data){
        return {
            error:false,
            data,
            massege:'fatch successfully'
        }
    }
    else{
        return{
            error:true,
            massege:'something wrong'
        } 
    }
}

async function getByIDMr(id){
    const data = await getByID(id);
    if(data){
        return {
            error:false,
            data,
            massege:'fatch successfully'
        }
    }
    else{
        return{
            error:true,
            massege:'something wrong'
        } 
    }
}

async function addMr(formData){
    const data = await add(formData);
    if(data){
        return {
            error:false,
            data,
            massege:'fatch successfully'
        }
    }
    else{
        return{
            error:true,
            massege:'something wrong'
        } 
    }
}

async function updateMr(id, formData){
    const data = await edit(id, formData);
    if(data){
        return {
            error:false,
            data,
            massege:'fatch successfully'
        }
    }
    else{
        return{
            error:true,
            massege:'something wrong'
        } 
    }
}

async function deleteMoviRating(id){
    const data = await deleteMr(id);
    if(data){
        return {
            error:false,
            data,
            massege:'fatch successfully'
        }
    }
    else{
        return{
            error:true,
            massege:'something wrong'
        } 
    }
}

module.exports = {getAllMR, getByIDMr, addMr, updateMr, deleteMoviRating};