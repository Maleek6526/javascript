function convertToFahrenheit(temperatureInCelcius){
	let celciusToFahrenheit = temperatureInCelcius * (9 / 5) + 32;
	return celciusToFahrenheit;
}

console.log(convertToFahrenheit(10));