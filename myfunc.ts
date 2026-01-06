/** 함수
 *  { } 열리면 무조건 scope 가 하나 또 생성 되요
 * 그러면 다른 scope 에 있는 변수랑 아예 관련이 없어져요
 */
function test1() {
  console.log(` 화면 출력 테스트. 리턴값 없음`);
}

/** a, b 라는 매개변수를 선언 했어요
 * 매개변수는 그냥 변수랑 좀 틀린게, () 안에다가 변수 선언하고
 * 이 함수를 호출할때 데이터를 받을수 있어요
 * number, bool, string 얘네들은 함수한테 값 줄때 복붙 해서 받아요
 * 이걸 자료결합도(data coupling), 아주 좋은 방식이에요
 */
function test2(a: number, b: number) {
  console.log(`a:${a}, b:${b}`);
  a++; // a= a+1
  b++;
}

/**
 * return := 기계 종료, 중지.
 * return data;  := 기계 중지하고, 데이터 호출한곳으로 던져 버려라
 */
function test3() {
  return "ok";
}

function test4(a: number, b: number) {
  return a + b;
}

function stemp1(obj1: testType) {
  obj1.a = (obj1?.a ?? 0) + 3;
}
test1();
let a = 3;
let b = 5;
// number, bool, string 얘네들은 함수한테 값 줄때 복붙 해서 줌
test2(a, b);
console.log(`main 의 a:${a}, b:${b}`);

console.log(`test4 : `, test4(a, b));

interface testType {
  a?: number;
  b?: number;
}
let jobj: testType = { a: 1, b: 2 };
