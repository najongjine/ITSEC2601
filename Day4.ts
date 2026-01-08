// /** 소수(prime number) 판별기
//  * 1,2,3,5,7,11,13,15,17 이런게 소수에요
//  * @param 숫자
//  * @returns true | false.
//  */
// function isPrime(_num: number) {
//   let bPrime = true;
//   for (let i = 2; i < _num; i++) {
//     if (_num % i == 0) {
//       bPrime = false;
//       break;
//     }
//   }
//   return bPrime;
// }

// function strLength(_str: string) {
//   let num = 0;
//   if (!_str) {
//     return -1;
//   }
//   for (const e of _str) {
//     ++num;
//   }
//   return num;
// }

// function myToLowerCase(str: string) {
//   let result = ``;
//   for (let i = 0; i < strLength(str); i++) {
//     const code = str.charCodeAt(i);
//     console.log(`str.charCodeAt(${i}) : ${code}`);
//     if (code >= 65 && code <= 90) {
//       result += String.fromCharCode(code + 32);
//       console.log(
//         `fromCharCode ${code}+32 : ${String.fromCharCode(code + 32)}`
//       );
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }

// interface ItemType {
//   name?: string;
//   price?: number;
//   createdDt?: string;
// }
// let product1: ItemType = {
//   name: "시바견",
//   price: 500,
//   createdDt: "2026-01-01",
// };
// let product2: ItemType = {
//   name: "코브라",
//   price: 5000,
//   createdDt: "2026-01-02",
// };
// let product3: ItemType = {
//   name: "보더콜리",
//   price: 20000,
//   createdDt: "2026-01-11",
// };
// let productList: ItemType[] = [product2, product1, product3];

// function sortProduct(productList: ItemType[], keyname: string) {
//   for (let i = 0; i < productList.length; i++) {
//     for (let j = 0; j < productList.length - i - 1; j++) {
//       //@ts-ignore
//       if (productList[j][keyname] > productList[j + 1][keyname]) {
//         let temp = productList[j];
//         productList[j] = productList[j + 1];
//         productList[j + 1] = temp;
//       }
//     }
//   }
//   return productList;
// }

// productList = productList.sort((a, b) => {
//   if ((a?.price ?? 0) > (b?.price ?? 0)) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// /** 정수 만들기 min <= x <= max
//  * @param min: 내가 원하는 최소 값
//  * @param max: 내가 원하는 최대 값
//  * @returns 랜덤 정수
//  */
// function randInt(min: number, max: number) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// /* for loop를 이용해서 mynums에 숫자 45개 채우세요 */
// let mynums: number[] = [];
// for (; true; ) {
//   if (mynums.length >= 45) {
//     break;
//   }
//   let randnum = randInt(1, 45);
//   if (mynums.find((e) => e == randnum)) {
//     continue;
//   }
//   mynums.push(randnum);
// }
// console.log(`mynums: `, mynums);
