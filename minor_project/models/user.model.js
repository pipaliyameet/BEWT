const db = require("../database/mysql")

async function getAll(){
    try{
        const [data,fileds] = await db.query("select * from users")
        return data;
    }
    catch(err){
        return false;
    }
}

async function getById(id){
    try{
        const [data,fileds] = await db.query("select * from users where UserId="+id);
        return data[0];
    }
    catch(err){
        return false;
    }
}

async function getByUserName(un){
    try{
        const [data,fileds] = await db.query(`select * from users where UserName='${un}'`);
        return data[0];
    }
    catch(err){
        return false;
    }
}

async function insert(formData){
    try{
        const [data,fileds]= await db.query(`INSERT INTO users (UserId, UserName, Password)VALUES (NULL, '${formData.UserName}', '${formData.Password}');`)
        return data;
    }
    catch(err){
        return false;
    }
}

async function update(id,formData){
    try{
        const [data,fileds]= await db.query(`UPDATE users SET UserName = '${formData.UserName}', Password = '${formData.Password}' WHERE UserId = '${id}';`)
        return data;
    }
    catch(err){
        return false;
    }
}

async function deleteById(id){
    try{
        const [data,fileds]= await db.query(`DELETE FROM users WHERE UserId='${id}';`)
        return data;
    }
    catch(err){
        return false;
    }
}

module.exports = {getAll, getById, insert, update, deleteById, getByUserName};