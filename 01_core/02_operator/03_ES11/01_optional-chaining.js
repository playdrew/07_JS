/*
    옵셔널 체이닝 연산자
    ES(2020년) 에 도입된 연산자로서 좌항의 피연산자가 null 
    또는 undefined 일때 undefined 를 반환하고
    그렇지 않으면 우항의 프로퍼티 참조를 이어나간다.
*/

//var obj = null;

//var val = obj && obj.value;

// 이것을 더 줄이고 싶은이에요 

var obj = null
// var val = obj && obj.value; 아래가 생략된 버전
var val = obj?.value;
// 위의 두 식은 같은 의미
console.log(val);
