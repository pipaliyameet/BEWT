
function getAllRestaurants() {
    const data = getAll();
    return "This is get all restaurants service"
    // Logic to get all restaurants
}

function getRestaurantById() {
    return `This is get restaurant by ID service for ID: `
    // Logic to get a restaurant by ID
}

module.exports = { getAllRestaurants , getRestaurantById };