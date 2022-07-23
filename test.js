let d= new Date()
let options={
    weekday:'long',
    month:'numeric',
    year:'numeric',
    // day:'long'
}
let displayDate=d.toLocaleDateString('en-US')
console.log(displayDate);