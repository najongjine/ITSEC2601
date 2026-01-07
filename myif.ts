// /** if, for (제어문) */
// let a = -1;

// /** if 문 안에는 데이터, 수학수식, 비교연산자, 함수를
//  * 적을수 있어요
//  * if() 안은 무조건 true | false로 치환 되요
//  */
// if (a < 0) {
//   console.log(` a 는 0 보다 작다`);
// } else if (a == -3) {
//   console.log(` a 는 -3 입니다`);
// } else {
//   console.log(` a 는 0 보다 크다`);
// }

// if (a < 0) {
//   console.log(` a 는 0 보다 작다`);
// }
// if (a == -3) {
//   console.log(` a 는 -3 입니다`);
// }
// if (a >= 0) {
//   console.log(` a 는 0 보다 크다`);
// }

// a = (65 * 232) / 99;
// /**
//  * 이 함수는 숫자를 받으면 성적을 알려주는 함수에요.
//  * @param a:number. 숫자를 넣어주면 되요
//  * @returns string. 안내메세지를 퉤 뱉어요.
//  * @abstract 사용 예시: let msg=gradefunc(90) // 출력:"A 학점"
//  */
// function gradefunc(a: number) {
//   let msg = "";
//   if (a >= 90) {
//     msg = `A 학점`;
//   } else if (a >= 80) {
//     msg = `B 학점`;
//   } else if (a >= 70) {
//     msg = `C 학점`;
//   } else if (a >= 60) {
//     msg = `D 학점`;
//   } else {
//     msg = `F 학점`;
//   }

//   return msg;
// }

// let data = gradefunc(a);

// for (let i = 0; i < 3; i++) {
//   console.log(` i: ${i}`);
// }
