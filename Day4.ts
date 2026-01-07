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

function myToLowerCase(str: string) {
  let result = ``;
  for (let i = 0; i < strLength(str); i++) {
    const code = str.charCodeAt(i);
    console.log(`str.charCodeAt(${i}) : ${code}`);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
      console.log(
        `fromCharCode ${code}+32 : ${String.fromCharCode(code + 32)}`
      );
    } else {
      result += str[i];
    }
  }
  return result;
}

interface ItemType {
  name?: string;
  price?: number;
  createdDt?: string;
}
let product1: ItemType = {
  name: "시바견",
  price: 500,
  createdDt: "2026-01-01",
};
let product2: ItemType = {
  name: "코브라",
  price: 5000,
  createdDt: "2026-01-02",
};
let product3: ItemType = {
  name: "보더콜리",
  price: 20000,
  createdDt: "2026-01-11",
};
let productList: ItemType[] = [product2, product1, product3];
