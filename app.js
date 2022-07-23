const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const ejs = require('ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs")

const daysOfWeek=['Monday','Tue','Wed','Thu','Fri','Sat','Sun']
let message=""

app.listen(3000,()=>{
    console.log(`server started`);
})

app.get('/',function(request,response){
//---------logic for building the weekdays--------
const weekday=new Date()
let today=daysOfWeek[weekday.getDay()]
let date=weekday.getDay()
if (date===5 || date===6) {
    message='Its a weekend'
} else {
    message="its a weekday"
}
response.render(`list`,{kindOfDay:today,messageForDay:message})
})
