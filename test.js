const daysOfWeek=['Monday','Tue','Wed','Thu','Fri','Sat','Sun']
const weekday=new Date()
let today=daysOfWeek[weekday.getDay()]
console.log(today);