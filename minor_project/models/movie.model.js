const db = require('../database/mysql');

async function getAll(){
    try{
        const [data,fileds] = await db.query("select * from movies");
        return data;
    }catch(err){
        return false;
    }
}

async function getById(id){
    try{
        const [data, fileds] = await db.query(`select * from movies where MovieID = ${id}`);
        return data;
    }catch(err){
        return false;
    }
}

async function insert(formData){
    try{
        const data = await db.query(`INSERT INTO movies (MovieID, MovieName, MovieImage) VALUES (NULL, '${formData.MovieName}', '${formData.MovieImage}');`);
        return data;
    }catch(err){
        return false;
    }
}

async function edit(id,formData){
    try{
        const data = await db.query(`UPDATE movies SET MovieName = '${formData.MovieName}', MovieImage = '${formData.MovieImage}' WHERE MovieID = '${id}'`);
        return data;
    }catch(err){
        return false;
    }
}

async function deleteById(id){
    try{
        const data = await db.query(`DELETE FROM movies WHERE MovieID='${id}';`);
        return data;
    }catch(err){
        return false;
    }
}

module.exports = {getAll, getById, insert, edit, deleteById};