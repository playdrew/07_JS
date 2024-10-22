/*
    명시적 타입 변환
    개발자의 의도에 따라 코드에 변환할 타입을 나타낸다.
    1. 내장 생성자 함수 사용(String , Number, Boolean)
    2. 내장 함수(메소드) 사용
*/

// 1. 내장 생성자 함수
// 전달인자에 10이라는 값을 String 타입으로 변환
console.log(String(10));

// 2. Object.prototype.toString 메소드 사용
// 모든 파일 클래스 객체들은 Object의 후손이다.
console.log((10).toString);