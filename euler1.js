// Problem 1: the Sum of the Multiples of 3 and 5

var array = [];

for (var i = 1; i < 1000; i++) {
	if ((i % 3 === 0) || (i % 5 === 0)) {
		array.push(i);
	}
}

var sum = 0;

for (var value in array) {
	sum += array[value];
}

console.log(sum);

