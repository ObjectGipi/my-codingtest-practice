/**
 * 문제 설명
 * 머썩이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다.
 * 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다.
 * 정수 n과 k가 매개변수로 주어졌을 때,
 * 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지
 * return 하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * 0 < n < 1,000
 * n / 10 ≤ k < 1,000
 * 서비스로 받은 음료수는 모두 마십니다.
 *
 * 입출력 예
 * | 10 | 3 | 124000  |
 * | 64 | 6 | 768000  |
 */
const calLambAndDrinkPrice = (n: number, k: number): number => {
  // 양꼬치 인분을 10으로 나눠서 몫 1개당 2000원씩 빼기
  // 아니면, 몫 만큼 음료수 갯수 빼기
  if (n / 10 !== 0) {
    k = k - Math.trunc(n / 10);
  }
  return n * 12000 + k * 2000;
};

console.log(calLambAndDrinkPrice(10, 3));
console.log(calLambAndDrinkPrice(64, 6));
