const cloudinary =require('cloudinary').v2;
// require('dotenv').config          
cloudinary.config({ 
  cloud_name: "do8etu7ml", 
  api_key: "962884318256378", 
  api_secret: "E02ti26CJcJzG9vy11lxyNikhVo"
});

module.exports={cloudinary}