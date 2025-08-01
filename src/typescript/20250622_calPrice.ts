/**
 * 옷가게 할인 받기
 *
 * 문제 설명
 * 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
 * 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
 *
 * 제한사항
 * 10 ≤ price ≤ 1,000,000
 * price는 10원 단위로(1의 자리가 0) 주어집니다.
 * 소수점 이하를 버린 정수를 return합니다.
 *
 * 입출력 예
 * | price   | result  |
 * |---------|---------|
 * | 150,000 | 142,500 |
 * | 580,000 | 464,000 |
 */
const calClothesPrice = (price: number): number => {
  if (500000 <= price) {
    price = Math.floor(price * 0.8);
  } else if (300000 <= price) {
    price = Math.floor(price * 0.9);
  } else if (100000 <= price) {
    price = Math.floor(price * 0.95);
  }
  return price;
};

console.log(calClothesPrice(580000));
console.log(`========================`);

const calPriceUseSwitch = (price: number): number => {
  switch (true) {
    case price >= 500_000:
      return Math.floor(price * 0.8);
    case price >= 300_000:
      return Math.floor(price * 0.9);
    case price >= 100_000:
      return Math.floor(price * 0.95);
    default:
      console.log(`지불 금액이 10만원 이하입니다.`);
      return price;
  }
};

console.log(calPriceUseSwitch(90000));
