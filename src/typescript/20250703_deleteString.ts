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
// 주어진 myString에서 연속된 문자열인 letter를 찾아서 모두 삭제(새로운 배열에 담는 형식)
const deleteAllString = (myString: string, letter: string): string => {
  let result: string = ``;

  for (let i: number = 0; i < myString.length; i = i + 1) {
    let isMatch: boolean = true;
    for (let j: number = 0; j < letter.length; j = j + 1) {
      if (myString[i + j] !== letter[j]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      i = i + letter.length - 1;
      continue;
    }
    result = result + myString[i];
  }
  return result;
};

console.log(deleteAllString(`bbbnbbbnanabbb`, `na`)); // bbbnbbb
console.log(deleteAllString("abcfdefghf", "f")); // abcdegh
console.log(`========================`);

/**
 * 문제 설명
 * 문자열 myString과 연속된 문자열 letter가 매개변수로 주어집니다.
 * myString에서 letter가 처음 등장하는 부분만 제거한 문자열을 반환하는 solution 함수를 작성하세요.
 *
 * 제한사항
 * 1 ≤ myString의 길이 ≤ 100
 * 1 ≤ letter의 길이 ≤ myString의 길이
 * myString과 letter는 알파벳 대소문자로만 이루어져 있습니다.
 *
 * 입출력 예
 * | "banana"   | "na"   | "bana"   |
 */
// 주어진 myString에서 첫번째 연속된 letter만 삭제(새로운 배열에 담는 형식)
const deleteFirstString = (myString: string, letter: string): string => {
  let result: string = ``;
  let isRemoved: boolean = false;

  for (let i: number = 0; i < myString.length; i = i + 1) {
    if (!isRemoved) {
      let isMatch: boolean = true;
      for (let j: number = 0; j < letter.length; j = j + 1) {
        if (myString[i + j] !== letter[j]) {
          isMatch = false;
          break; // 첫 문자열이 맞지않으면 더 볼 필요도 없기 때문
        }
      }
      if (isMatch) {
        i = i + letter.length - 1; // 위 for문에서 i가 1더해지기 때문에 "- 1"
        isRemoved = true; // 이 조건의 유무에 따라 첫번째 나오는 letter만 지울지, 모든 letter를 지울지가 결정됨
        continue;
      }
    }
    result = result + myString[i];
  }
  return result;
};

console.log(deleteFirstString(`bbbnbbbnanabbb`, `na`)); // bbbnbbbnabbb
console.log(deleteFirstString("abcfdefghf", "f")); // abcdefghf

// 배열·문자열 문법 indexOf
// 💡indexOf(searchValue, fromIndex?): 주어진 값이나 부분 문자열이 처음 등장하는 위치의 인덱스를 반환(없으면 –1)
// – 배열 사용
//   예: [2, 5, 9, 2].indexOf(5)        → 1
//   예: [2, 5, 9, 2].indexOf(2, 2)     → 3
// – 문자열 사용
//   예: "hello".indexOf("l")           → 2
//   예: "hello".indexOf("l", 3)        → 3

// 배열·문자열 문법 lastIndexOf()
// 💡lastIndexOf(searchValue, fromIndex?): 뒤에서부터 값이 마지막으로 등장하는 위치의 인덱스를 반환(없으면 –1)
// – 배열 사용
//   예: [1, 2, 3, 2, 1].lastIndexOf(2) → 3
//   예: [1, 2, 3, 2, 1].lastIndexOf(2, 2) → 1
// – 문자열 사용
//   예: "banana".lastIndexOf("na")     → 4
//   예: "hello".lastIndexOf("l", 2)    → 2

// 문자열 문법 substr()
// 💡 substr(start, length?): start 위치부터 length만큼(생략 시 끝까지) 잘라낸 부분 문자열을 반환
//   (원본 불변, 표준에선 slice/substring 권장)
// – start ≥ 0: 앞에서부터 인덱스, start < 0: 뒤에서부터(length + start)
// – length ≤ 0: 빈 문자열 반환
//   예: "JavaScript".substr(4)         → "Script"
//   예: "JavaScript".substr(4, 3)      → "Scr"
//   예: "JavaScript".substr(-6, 2)     → "Sc"

// 문자열 문법 startsWith()
// 💡startsWith(searchString, position?): 문자열이 searchString으로 시작하면 true, 아니면 false
// – position ≥ 0: 해당 인덱스부터 비교 시작 (생략 시 0)
//   예: "TypeScript".startsWith("Type")    → true
//   예: "TypeScript".startsWith("Script")  → false
//   예: "TypeScript".startsWith("Script", 4) → true
