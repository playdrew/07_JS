/*
    자바스크립트에서 함수는 객체 타입의 값으로
    변수에 함수를 할당할 수 있다.
*/

// 함수를 변수에 할당한 것을 함수 표현식이라고 하며
// 함수 표현식에서는 함수의 이름을 생략할 수 있다.
var hello = function(name){
    return `${name} 하~위`;
}

// 식별자로 함수를 호출
console.log(hello('조평훈'));

var calc = function add(a,b){
    return a + b ;
}


// calc add 중 무엇으로 할까요
// add 로 하면 not defined 라고 적혀있어요
// 공간에다가 값을 집어넣어나요 지금 넣은 것은 calc 공간에 넣었고 없는 공간인 add에 넣어서 문제가 생긴것
//console.log(add(10,20));
// 함수 표현식에서 함수명을 생략하지 않아도 되지만
// 함수 호출은 식별자로 하게 된다. -> 함수명으론 불가능
console.log(calc(10,20));
