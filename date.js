    exports.getDate=function(){
    let day=new Date()
    let options={
        weekday:"long"
    }
    let today=day.toLocaleDateString('en-UK',options)
    return today
}