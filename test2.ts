// /** 타입스크립트
//  * 파이썬과 자바스크립트는 타입이 안보여요
//  */

// let a = 1;
// let b = "2";
// let bool1 = true;
// let c: number = a + Number(b);

// /**
//  * Number:NumberConstructor
//  * (value?:any) => number
//  * Number 라는 함수가 있는데, 타입은
//  * NumberConstructor 라고 한다.
//  * value 라는거 아무거나(any) 넣어주면 되고,
//  * 결과는 ㅅ수자를 퉤 뱉는다
//  *
//  * 모든 프로그래밍 언어는 타입이 있어요
//  * 그런데, .js랑 .py 는 타입이 안보여요
//  *
//  * .js, .py은 은행어플 금지에요
//  *
//  * .java, .csharp, .ts 는 은행어플 합격이에요
//  * 왜냐면 타입이 보이기 때문에, 우리가 실수하는거
//  * 빨간출 쳐줘요
//  *
//  */

// a = 1;
// b = `dsfsdfgeft34`;
// c = a + (Number(b) || 0);
// console.log(` (Number(b)||0): ${Number(b) || 0}`);
// console.log(` c: ${c}`);

// /**
//  * exception 처리
//  * - 개발자가 실수할때 블루스크린이나 오결제를 방지함
//  * - 해킹에서 서버 터트리기 막아줌
//  */

// let array1: number[] = [1, 2, 3];
// let strArray1: string[] = ["가", "나다", "마바사"];

// /**
//  *  변수 = {} 요런게 나오면, typescript 에서는
//  * 자바스크립트 객체라고 해요.
//  * 자바의 클래스랑 비교하자면, 어려운 키워드 다 빼고,
//  * 데이터랑 기능 정의만 남긴거에요. 사용은 드럽게 쉬워요.
//  *
//  * 어떠한 데이터도 다 받을수 있어요.
//  */
// let jobj1 = {
//   이름: "홍길동",
//   돈: 200000,
//   주식예측: () => {
//     console.log(`비트코인 이제 거품임`);
//   },
// };

// interface shoppingType {
//   title?: string;
//   price?: number;
// }
// let product1: shoppingType = {};
// product1.price = 500;
// product1.title = "시바견";
// let product2: shoppingType = {};
// product2.price = 5000;
// product2.title = "보더콜리";
// let shopping1: shoppingType[] = [product1, product2];
// console.log(`shopping1: `, shopping1);

// shopping1[0].title = "수정된 시바견";

// console.log(` product1: `, product1);
