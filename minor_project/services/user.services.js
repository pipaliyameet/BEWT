//get all user
function getAllUsers(){
    return "get all users service called";
}

//get user by id
function getById(id){
    return "user get by id services called for "+id;
}

//Insert
function insertUser(){
    return "user inserted services called";
}

//Update
function updateUser(id){
    return "User updated services called for "+id;
}

//delete
function deleteUser(id){
    return "User deleted services called for "+id;
}

module.exports = {getAllUsers, getById, insertUser, updateUser, deleteUser};