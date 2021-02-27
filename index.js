const express=require('express')
const mongoose = require('mongoose')
const Restaurant=require('./schema/restaurant')
const session=require('express-session')
const app=express()


mongoose.connect('mongodb://localhost:27017/restaurants', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
/* SEEDING ######################################## */
let inst=new Restaurant({name:'Noor Mahal',location:'Karnal',price:1500,description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto et pariatur dolores iure, repudiandae beatae tenetur, inventore suscipit ea praesentium soluta sunt sint tempora fugit, deleniti molestiae corrupti optio. Et.' ,image:'https://r1imghtlak.mmtcdn.com/fd244afc70a611e79cbe025f77df004f.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg'})
inst.save();
 inst=new Restaurant({name:'Jewels',location:'Karnal',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto et pariatur dolores iure, repudiandae beatae tenetur, inventore suscipit ea praesentium soluta sunt sint tempora fugit, deleniti molestiae corrupti optio. Et.',price:1000,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWhpfomH0HSwzWOHw2AuRw2qceBoadGf2wQ&usqp=CAU'})
inst.save()
inst=new Restaurant({name:'Neel Kanth',location:'Karnal',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto et pariatur dolores iure, repudiandae beatae tenetur, inventore suscipit ea praesentium soluta sunt sint tempora fugit, deleniti molestiae corrupti optio. Et.',price:1000,image:'https://res.cloudinary.com/purnesh/image/upload/f_auto/v1529415586/neelkanth-star0.jpg'})
inst.save()
 inst=new Restaurant({name:'AM PM store',location:'Karnal',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto et pariatur dolores iure, repudiandae beatae tenetur, inventore suscipit ea praesentium soluta sunt sint tempora fugit, deleniti molestiae corrupti optio. Et.',price:1000,image:'https://b.zmtcdn.com/data/pictures/9/18874159/baba8561077874845745c254ff62be63_o2_featured_v2.jpg?output-format=webp'})
inst.save()
 inst=new Restaurant({name:'Basement Lounge',location:'Karnal',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto et pariatur dolores iure, repudiandae beatae tenetur, inventore suscipit ea praesentium soluta sunt sint tempora fugit, deleniti molestiae corrupti optio. Et.',price:2000,image:'https://b.zmtcdn.com/data/pictures/3/19430113/e431d5f578a7f4a7734b32ec3c275b84_o2_featured_v2.jpg?output-format=webp'})
inst.save()
 inst=new Restaurant({name:'Baskin Robins',location:'Karnal',price:500,description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto et pariatur dolores iure, repudiandae beatae tenetur, inventore suscipit ea praesentium soluta sunt sint tempora fugit, deleniti molestiae corrupti optio. Et.',image:'https://b.zmtcdn.com/data/pictures/chains/9/18963139/31977a791e151fe77f2bb2d1cedfc4e1_o2_featured_v2.jpg?output-format=webp'})
inst.save()
 inst=new Restaurant({name:'He-Man Restaurants',location:'Karnal',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto et pariatur dolores iure, repudiandae beatae tenetur, inventore suscipit ea praesentium soluta sunt sint tempora fugit, deleniti molestiae corrupti optio. Et.',price:1500,image:'https://b.zmtcdn.com/data/pictures/7/19610467/cfea605af2b90c7a3974f961f12c3278_o2_featured_v2.jpg?output-format=webp'})
inst.save()
/* SEEDING #################################### */
app.set('view engine','ejs')
app.set('views','views')
app.use(express.static('public'))
app.use(session({secret:'temporary',saveUninitialized:false}))
app.get('/',async(req,res)=>{
    let rest=await Restaurant.find({})
    res.render('home',{rest})
})
app.get('/search',async(req,res)=>{
    let {q}=req.query;
    let rest=await Restaurant.find({name:new RegExp(q,'i')})
    if(q==''){
        rest=rest.slice(0,3)
    }
    res.send(rest)
})

app.get('/restaurants/:id',async (req,res)=>{
    let {id}=req.params;
    let rest=await Restaurant.findById(id)
    res.render('details.ejs',{rest})

})
app.post('/restaurants/:id',(req,res)=>{
    res.render('book.ejs')
})

app.listen(3000,()=>{
    console.log('working');
})