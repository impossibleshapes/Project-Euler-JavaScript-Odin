// Problem 2: Even Fibonacci Numbers 

var term1 = 1;
var term2 = 2;
var term3 = 0;
var sum = 0;

while (term1 < 4000000) {
	if (term2 % 2 === 0) {
		sum += x;
	}

	term3 = term1 + term2;
	term1 = term2;
	term2 = term3;
}

console.log(sum);