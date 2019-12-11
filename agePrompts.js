// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input their year of in console.
console.log("Please Input Your Year Of Birth.");
 //When user inputs their year of birth and click enter key.
standard_input.on('data', (data)=> {
	if(data >= 2001 && data <= 2019){
  // Print user input in console.
        console.log('You are a minor');}
	else if(data <= 2002 && data >= 1983){
	console.log('You are a youth');

}
	else if(data <= 1984){
	console.log('You are an elder');

}


    });

    
  





	
