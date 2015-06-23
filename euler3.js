// Problem 3: Largest prime factor of 600851475143
function isPrime(num) {
	if (num < 2) {
		return false;
	}

	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	} 
	return true;
}

var test = 600851475143;

for (var j = 2; j < test; j++) {
	if ((test % j === 0) && isPrime(j)) {
		x=j; 
	}
}
console.log(x);