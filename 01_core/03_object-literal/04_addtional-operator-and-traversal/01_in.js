/*
    in 연산자는 존재 여부를 확인하는 연산자
    SQL 에서 썻던 것과 동일한 기능
*/

var student = {
    name : '조평훈',
    age : 20,
    test : undefined
};

// name 이라는 프로퍼티키가 존재하는지 student 라는 객체에
console.log('name' in student) // true
console.log('asdd' in student) // false 

