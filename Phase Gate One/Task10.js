const davidsExpenses = {
			"groceries": 150,
			"dining out": 100,
			"transportation": 50,
			"entertainment": 80
			}

let sum = 0;

for (let elements in davidsExpenses) {

	sum += davidsExpenses[elements]	

}
console.log("The sum of Davids expenses in a month is "+sum);