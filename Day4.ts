function isPrime(_num: number) {
  let bPrime = true;
  for (let i = 2; i < _num; i++) {
    if (_num % i == 0) {
      bPrime = false;
      break;
    }
  }
  return bPrime;
}
