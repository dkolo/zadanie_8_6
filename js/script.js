var a = prompt('Enter a value assigned to variable A'),
	 b = prompt('Enter a value assigned to variable B'),
	 value;

value = (a * a) - (2 * a * b) - (b * b);

console.log('The result is ' + value);

if (value > 0) {
	console.log('Wynik dodatni');
} else if (value < 0) {
	console.log('Wynik ujemny');
} else {
	console.log('Wynik działania jest równy zero');
}