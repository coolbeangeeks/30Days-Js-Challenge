let year =2020

if(year%4===0){
    if(year%100){
        if(year%400){
            console.log("leap year")
        }
        else console.log("Not a leap year")
    }
    else console.log("Leap year");

}
else{
    console.log("not a leap Year")
}