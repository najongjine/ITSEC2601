/** 소수(prime number) 판별기
 * 1,2,3,5,7,11,13,15,17 이런게 소수에요
 * @param 숫자
 * @returns true | false.
 */
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

function strLength(_str: string) {
  let num = 0;
  if (!_str) {
    return -1;
  }
  for (const e of _str) {
    ++num;
  }
  return num;
}

console.log(strLength(`dfgret34545t3`));
