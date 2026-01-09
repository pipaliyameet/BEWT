// database queries

async function getAll(){
    const data = await pool.query('SELECT * FROM restaurants');
    console.log(data);
}

module.exports = {getAll};