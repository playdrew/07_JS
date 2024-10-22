/*
    ES6 버전에서 도입이 된 화살표 함수는 function 키워드 대신에 
    => 를 사용해서 조금 더 간략하게 함수를 정의하는 것을 의미한다.
*/

var message = function(){
    return "Hello World!!!"
}

console.log(message());

// function 생략 가능


message = () => {
    return `Arrow Function!!`;
}

console.log(message());

// 명령문(실행 할 코드)이 하나만 있는 경우 중괄호 생략가능
message = () => "Arrow function is Simple";

console.log(message());

// 매개변수 있을 시 화살표 함수 사용
message = (arg1,arg2) => "Arrow" + arg1 + arg2;

console.log(message('Function','argument!!'));

// message = (arg1,arg2) =>{ 
//     var a = arg1;
//     var b = arg2;
//     var sum = a+b ;
//     return sum;
// }
// 중괄호 블럭 생략불가능 케이스

// 매개변수가 하나이면 소괄호 생략가능
message = args1 => 'Arrow args' + args1;
console.log(message('very Simple'));
// 위와 아래의 코드는 동일하다
message = function(args1){
    return 'arrow args1' + args1;
}
console.log(message('very Simple'));



