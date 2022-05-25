const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dummyserver')
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("Connection fail")
})