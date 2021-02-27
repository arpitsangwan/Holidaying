const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/restaurants', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

let schema=new mongoose.Schema({
    name:String,
    image:String,
    price:Number,
    location:String,
    description:String
})
module.exports=mongoose.model('Restaurant',schema)