function myOperand(left_operand, right_operand, operator){

	if(operator == '+'){

		return left_operand + right_operand;

	}

	else if(operator == '-'){

		return left_operand - right_operand;

	}

	else if(operator == '*'){

		return left_operand * right_operand;

	}

	else if(operator == '/'){

		return left_operand / right_operand;

	}

	else{

		return NaN;

	}

}

console.log(myOperand(2, 3, '+'));