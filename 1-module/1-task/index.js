function factorial(n) {
  let res = 1;
	for (; n > 1; n -= 1) {
		res *= n;
	}
	return res;
}
