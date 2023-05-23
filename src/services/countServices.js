const db = require('../database/models')

module.exports = {
    getAllProducts : async () => {
    try {
      const totalProducts = await db.Product.count();
  return totalProducts 
 } catch (error){
     throw {
         status : 500,
         message : error.message
     }
 }
},
getAllUsers : async () => {
    try {
      const totalUsers = await db.User.count();
  return totalUsers 
 } catch (error){
     throw {
         status : 500,
         message : error.message
     }
 }
},
getAllBrands : async () => {
    try {
      const totalBrands = await db.Brand.findAll({include:['products']});
  return totalBrands 
 } catch (error){
     throw {
         status : 500,
         message : error.message
     }
 }
},
getFindAndCountAllBrands : async () => {
    try {
      const {count, rows : brands} = await db.Brand.findAndCountAll();
  return {brands, count} 
 } catch (error){
     throw {
         status : 500,
         message : error.message
     }
 }
}
}
