export class Calculator {
  // ❓아래 콘솔로그출력에서 num1, num2를 사용하고 싶어서 public으로 선언했는데 권장되지 않는 방법일까요?
  // ❓혹은 더 좋은 방법이 있을까요?
  public num1: number;
  public num2: number;

  // 생성자에서 처음부터 변수를 지정하면 모든 사칙연산을 한번에 편하게 쓸 수 있음
  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  // 두 수의 합
  public addition = (): number => {
    return this.num1 + this.num2;
  };

  // 두 수의 차
  public subtraction = (): number => {
    return this.num1 - this.num2;
  };

  // 두 수의 곱
  public multiplication = (): number => {
    return this.num1 * this.num2;
  };

  // 두 수의 몫과 나머지
  public divisionAndRemainder = (): number[] => {
    let division: number = this.num1 / this.num2;
    const remainder: number = this.num1 % this.num2;
    return [Math.floor(division), remainder]; // 몫을 정수로 출력하기 위해서 Math.floor 사용
  };
}

const calculator = new Calculator(10, 5);
console.log(
  `주어진 수: ${calculator.num1}, ${calculator.num2}
두 수의 합: ${calculator.addition()}
두 수의 차: ${calculator.subtraction()}
두 수의 곱: ${calculator.multiplication()}
두 수의 몫과 나머지: ${calculator.divisionAndRemainder()}`,
);

// 💡파라미터와 리턴값의 타입을 문자열(string)로 해야한다면? ➡️ parseInt(), toString()
const additionV2 = (num1: string, num2: string): string => {
  const parseIntNum1: number = parseInt(num1);
  const parseIntNum2: number = parseInt(num2);
  const answer: number = parseIntNum1 + parseIntNum2;
  return answer.toString();
};
