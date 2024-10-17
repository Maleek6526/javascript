let userInput = 10;

let originalUserInput = userInput;
count = 1; 
while(count < userInput){
	originalUserInput *= userInput - count;
	if(originalUserInput > 1000) break;
	count++;
	
}console.log(originalUserInput);
