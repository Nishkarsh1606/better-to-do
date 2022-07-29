const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
let newTasksArray = [];
let workList = [];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let message = "";

app.listen(3000, () => {
  console.log(`server started`);
});

const weekday = new Date();
let today = daysOfWeek[weekday.getDay()];
console.log(today);

app.get("/", function (request, response) {
  //trying toLocalString method
  let options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  let today2 = weekday.toLocaleDateString("en-UK", options);
  console.log(today2);
  // End------
  let date = weekday.getDay();
  if (date === 5 || date === 6) {
    message = `Today is ${today}. It's a weekend!`;
  } else {
    message = `Today is ${today}. It's a weekday :(`;
  }
  response.render(`list`, {
    listTitle: today,
    messageForDay: message,
    newListItem: newTasksArray,
  });
});

app.get("/work", (req, res) => {
  res.render("list", {
    listTitle: today,
    messageForDay: `Let's get to work`,
    newListItem: workList,
  });
});

//Making post requests
app.post("/", (request, response) => {
  let newTasks = request.body.newItem;
  newTasksArray.push(newTasks);
  response.redirect("/");
});