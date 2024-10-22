/*
    Boolean 타입으로 명시적 타입 변환
    1. Boolean() 생성자 함수 사용
    2. !! 부정논리연산자를 2번쓰게 되면 Boolean 타입으로 변환한다.
    - !true => false 
    - !!'java' => true 
*/

// 트루시와 펄시체크
console.log(Boolean('java')); // 공백이 아닌 문자열 true
console.log(Boolean('')); // 공백인 문자열 false
// '', 0, NaN, undefined, null, false => false 

console.log(!!'java');
console.log(!!0);
