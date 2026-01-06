/** if, for (제어문) */
let a = -1;

/** if 문 안에는 데이터, 수학수식, 비교연산자, 함수를
 * 적을수 있어요
 * if() 안은 무조건 true | false로 치환 되요
 */
if (a < 0) {
  console.log(` a 는 0 보다 작다`);
} else if (a == -3) {
  console.log(` a 는 -3 입니다`);
} else {
  console.log(` a 는 0 보다 크다`);
}

if (a < 0) {
  console.log(` a 는 0 보다 작다`);
}
if (a == -3) {
  console.log(` a 는 -3 입니다`);
}
if (a >= 0) {
  console.log(` a 는 0 보다 크다`);
}

a = 65;
/** 성적 안내 만들기
 * 90점 이상이면 A
 * 80점 대면 B
 * 70점 대면 C
 * 60 점 대면 D
 * 그 이하면 F
 */
