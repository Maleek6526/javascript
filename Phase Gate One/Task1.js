let userInput = 5;

let originalUserInput = userInput;
count = 1; 
while(count < userInput){
	originalUserInput *= userInput - count;
	count++;
	

}console.log(originalUserInput);
