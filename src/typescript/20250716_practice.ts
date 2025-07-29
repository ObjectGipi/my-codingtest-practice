/**
 * 분수의 덧셈
 * 최대 공약수로 나눈 값을 [분모, 분자] 형태로 반환
 */
const fractionAdditionPracV2 = (
  bunmo1: number,
  bunza1: number,
  bunmo2: number,
  bunza2: number
): number[] => {
  let bunmo3: number = bunmo1 * bunmo2;
  let bunza3: number = (bunmo2 * bunza1) + (bunmo1 * bunza2);
  let minNumber: number = 0;
  if (bunmo3 < bunza3) {
    minNumber = bunmo3;
  } else {
    minNumber = bunza3;
  }
  for (let i: number = minNumber; i > 1; i = i - 1) {
    if (i % bunmo3 === 0 && i % bunza3 === 0) {
      return [Math.trunc(bunmo3 / i), Math.trunc(bunza3 / i)];
    }
  }
  console.log(`최대 공약수가 없습니다.`);
  return [bunmo3, bunza3];
};

console.log(fractionAdditionPracV2(2,1, 3, 4)); // [6, 11]
console.log(fractionAdditionPracV2(3, 5, 7, 10)); // [21, 65]
console.log(fractionAdditionPracV2(2, 1, 2, 1)); // [1, 1]
console.log(`========================`);

/**
 * 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
 * 정수 배열 array가 매개변수로 주어질 때, [최빈값, 반복된 횟수]를 return 하도록 함수를 완성하세요.
 * 최빈값이 여러 개면 [-1, 0]을 return 합니다.
 * 0 < array의 길이 < 100
 * 0 ≤ array의 원소 < 1000
 **/
// calculateModeNumber

console.log(`========================`);
/**
 * 문제 설명
 * 문자열 myString과 연속된 문자열 letter가 매개변수로 주어집니다.
 * myString에서 letter에 해당하는 모든 부분을 제거한 문자열을 반환하는 solution 함수를 작성하세요.
 *
 * 제한사항
 * 1 ≤ myString의 길이 ≤ 100
 * 1 ≤ letter의 길이 ≤ myString의 길이
 * myString과 letter는 알파벳 대소문자로만 이루어져 있습니다.
 *
 * 입출력 예
 * | "banana"   | "na"   | "ba"    |
 */
// deleteFirstString

console.log(`========================`);
/**
 * 진료 순서 정하기
 *
 * 문제 설명:
 * 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
 * 정수 배열 emergency가 매개변수로 주어질 때, 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항:
 * 중복된 원소는 없습니다.
 * 1 ≤ emergency의 길이 ≤ 10
 * 1 ≤ emergency의 원소 ≤ 100
 *
 * 입출력 예:
 * | [3, 76, 24]             | [3, 1, 2]        |
 * | [1, 2, 3, 4, 5, 6, 7]   | [7, 6, 5, 4, 3, 2, 1] |
 * | [30, 10, 23, 6, 100]    | [2, 4, 3, 5, 1]  |
 */
// 진료 순서 정하기
// emergencyNumber

console.log(`========================`);
/**
 * 문제 설명
 * 머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다.
 * 그낭은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다.
 * 문자열 letter 가 매개변수로 주어질 때,
 * letter 를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
 *
 * 모스부호는 다음과 같습니다:
 *
 * morse = {
 *   '.-':'a', '-...':'b', '-.-.':'c', '-..':'d', '.':'e', '..-.':'f',
 *   '--.':'g', '....':'h', '..':'i', '.---':'j', '-.-':'k', '.-..':'l',
 *   '--':'m', '-.':'n', '---':'o', '.--.':'p', '--.-':'q', '.-.':'r',
 *   '...':'s', '-':'t', '..-':'u', '...-':'v', '.--':'w', '-..-':'x',
 *   '-.--':'y', '--..':'z'
 * }
 *
 * 제한사항
 * 1 ≤ letter 의 길이 ≤ 1,000
 * return값은 소문자입니다.
 * letter 의 모스부호는 공백으로 나누어져 있습니다.
 * letter 에 공백은 연속으로 두 개 이상 존재하지 않습니다.
 * 해독할 수 없는 편지는 주어지지 않습니다.
 * 편지의 시작과 끝에는 공백이 없습니다.
 *
 * 입출력 예
 * ".... . .-.. .-.. ---"        | "hello"
 * ".--. -.-- - .... --- -."     | "python"
 */
// morseCodeTranslator1
