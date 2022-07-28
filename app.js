
const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const ejs = require('ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs")
let newTasksArray=[]


const daysOfWeek = ["Monday", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let message = "";

app.listen(3000, () => {
    console.log(`server started`);
});


app.get('/',function(request,response){
//---------logic for building the weekdays--------
const weekday=new Date()
let today=daysOfWeek[weekday.getDay()]

//trying toLocalString method
let options={
    month:'long',
    day:'numeric',
    year:'numeric'
}
let today2=weekday.toLocaleDateString('en-UK',options)
console.log(today2);
// End------
let date=weekday.getDay()
if (date===5 || date===6) {
    message=`Today is ${today}. It's a weekend!`
} else {
    message=`Today is ${today}. It's a weekday :(`
}
response.render(`list`,{kindOfDay:today,messageForDay:message,newListItem:newTasksArray})
})

app.get("/", function (request, response) {
    //---------logic for building the weekdays--------
    const weekday = new Date();
    let options = {
        weekday: "long",
    };
    let today = weekday.toLocaleDateString("en-UK", options);
    let date = weekday.getDay();
    if (date === 5 || date === 6) {
        message = "Its a weekend";
    } else {
        message = "its a weekday";
    }
    response.render(`list`, {
        kindOfDay: today,
        messageForDay: message,
        typeOfDate: date,
    });
});

//Making post requests
app.post('/',(request,response)=>{
    let newTasks=request.body.newItem
    newTasksArray.push(newTasks)
    response.redirect('/')
})
