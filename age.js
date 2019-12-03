let year = parseInt(prompt("enter your year of birth: "))
let age =2019 - year
if (age>=0){
    if(age <18){
        
        console.log('Your age is: ' + age  + 'years, you are a minor')
    }
    else if (age>=18 && age<=36){
        console.log('Your age is: ' + age + "years, you are a youth")
    }
    else {
        console.log('Your age is: ' + age + "years, you are an elder")
    }
    /*else {
        console.log("abnormal age")
    }
*/}