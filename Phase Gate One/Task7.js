function getLeapYear(leapYear){

	if(leapYear % 4 == 0 && leapYear % 100 != 0 || leapYear % 400 == 0) {

		console.log("True")
	}
	
	else{
			console.log("False")

		}
}

getLeapYear(2020);



