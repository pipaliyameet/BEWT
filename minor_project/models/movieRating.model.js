const db = require('../database/mysql');

async function getAll(){
    try{
        const [data, filed] = await db.query(`select * from movie_rating`);
        return data;
    }
    catch(err){
        return false;
    }
}

async function getByID(id){
    try{
        const [data, filed] = await db.query(`select * from movie_rating where RatingID = '${id}'`);
        return data;
    }
    catch(err){
        return false;
    }
}

async function add(formData){
    try{
        const data= await db.query(`
            INSERT INTO movie_rating (RatingID, MovieID, UserID, RatingStar, RatingComment)
            VALUES (null, 1, 1, '${formData.RatingStar}', '${formData.RatingComment}');`);
        console.log(data);
        return data;
    }
    catch(err){
        console.log(err);
        return false;
    }
}

async function edit(id,formData){
    try{
        const data= await db.query(`
            UPDATE movie_rating
            SET RatingStar = '${formData.RatingStar}',
                RatingComment = '${formData.RatingComment}'
            WHERE RatingID = ${id};`);
        // console.log(data);
        return data;
    }
    catch(err){
        console.log(err);
        return false;
    }
}

async function deleteMr(id){
    try{
        const data = await db.query(`delete from movie_rating where RatingId = '${id}'`);
        return data;
    }
    catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {getAll, getByID, add, edit, deleteMr};