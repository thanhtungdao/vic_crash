$.getJSON("accidents.json", function(result){
    date_count = {}
    console.log(result)
    for(var key in result){
        date = result[key].ACCIDENT_DATE
        if(!(date in date_count)){
            date_count[date] = 1
        }else{
            date_count[date] += 1
        }
    }
    console.log(date_count)
})