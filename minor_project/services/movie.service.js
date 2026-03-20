const { getAll, getById, insert, edit, deleteById, getByMovieName } = require("../models/movie.model");

async function getAllMovie(){
    const data = await getAll();
    if(data){
        return {
            error:false,
            data,
            message:"movie fatch successfully"
        };
    }else{
        return{
            error:true,
            message : "Something wrong during getAll"
        }
    }
}

async function getByIdMovie(id){
    const data = await getById(id);
    if(data){
        return {
            error:false,
            data,
            message:"movie fatch successfully"
        };
    }else{
        return{
            error:true,
            message : "Something wrong during getById"
        }
    }
}

async function insertMovie(formData){
    const data = await insert(formData);
    if(data){
        return {
            error:false,
            data,
            message:"movie fatch successfully"
        };
    }else{
        return{
            error:true,
            message : "Something wrong during insert"
        }
    }
}

async function updateMovie(id,formData){
    const data = await edit(id,formData);
    if(data){
        return {
            error:false,
            data,
            message:"movie fatch successfully"
        };
    }else{
        return{
            error:true,
            message : "Something wrong during edit"
        }
    }
}

async function deleteMovie(id){
    const data = await deleteById(id);
    if(data){
        return {
            error:false,
            data,
            message:"movie fatch successfully"
        };
    }else{
        return{
            error:true,
            message : "Something wrong during delete"
        }
    }
}

module.exports = {getAllMovie, getByIdMovie, insertMovie, updateMovie, deleteMovie};