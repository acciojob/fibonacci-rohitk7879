function fibonacci(num) {
// your code here
	let n1 = 0;
	let n2 = 1;
	if(num <= 2){
		return num-1;
	}
	var nextValue = 0;
	for (let index = 3; index <= num; index++){
		nextValue = n1 + n2;
		n1 = n2;
		n2 = nextValue;
	}
	return nextValue;
}

module.exports = fibonacci;
