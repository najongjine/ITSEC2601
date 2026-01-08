/* for loop를 이용해서 mynums에 숫자 45개 채우세요 */
function randInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let mynums: number[] = [];
for (; true; ) {
  if (mynums.length >= 45) {
    break;
  }
  let randnum = randInt(1, 45);
  if (mynums.find((e) => e == randnum)) {
    continue;
  }
  mynums.push(randnum);
}
console.log(`mynums: `, mynums.slice(0, 6));

/* mynums 에 45개의 랜덤숫자 채워진거 확인 했어요 
이제 여기서 6개만 고르죠
*/
