var a;
var b;

a = prompt('Wstaw wartość a:');
b = prompt('Wstaw wartość b:');
	
var value = (a * a) - (2 * a * b) + (b * b);

console.log('Wynik to: ' + value)

if (value > 0) {
    alert('Wynik dodatni');
}	else if (value < 0) {
	alert('Wynik ujemny');
}	else if (value === 0) {
    alert('Wynik równy zero');
} 	else if (isNaN(value)) {
    alert('To nie jest liczba!');
}	else {
	alert('Wstaw odpowiednie wartości!');
}