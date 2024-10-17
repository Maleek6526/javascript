let vowels = ['a', 'e', 'i', 'o', 'u']; 

let myInput = "hello world";

let amountOfTimes = 0;

for(let count = 0; count < myInput.length; count++){

	for(let counter = 0; counter < vowels.length; counter++){
		if(myInput.charAt(count) == vowels[counter]) {
			amountOfTimes++;		
		}
	}
	
}console.log(amountOfTimes);

