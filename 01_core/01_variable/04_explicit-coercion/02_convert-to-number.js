/*
    숫자 타입으로 명시적 타입 변환
    1. Number() 생성자 함수를 사용해서 변환
    2. parseInt, parseFloat 함수이용(문자열 -> 숫자 '만' 가능)
    3. * 산술 이용
*/

console.log(Number(true));
// 불리언타입이 지정하고 있는 숫자 1을 반환하다
console.log(Number('10.01'));

// int float 소수점 절삭 
// !문자열을 숫자로 만 가능하다.
console.log(parseInt('10'));
console.log(parseFloat('10')); 
console.log(parseInt('10.2'));
console.log(parseFloat('10.2'));

console.log('10'*1); // 아무 의미없는 *1 함으로서 산술연산 진행