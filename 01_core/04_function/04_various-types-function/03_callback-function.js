// 매개변수로 함수로 보낼 수 있다 메소드를 전달인자로 보내는 것 함수 자체도 값으로 표현될 수 있다. 객체를 어떤 변수에 담고 함수를 어떤 변수로 담았듯이 함수하나를 전달인자로 전달 특정함수에 전달함수를 콜백함수라고 하고 전달받는 함수는 고차함수라고 합니다. 메소드자체를 인자로 전달한다라는 것이 자바와 차이

/*
    콜백함수
    - 함수 매개변수 통해 다른 함수의 내부로 전달되는 함수를 
    콜백 함수라고 한다.
    그리고 이렇게 매개변수를 통해 함수를 전달받는 본체를
    고차 함수라고 한다
    콜백 함수는 고차 함수에 전달이 되어 헬퍼 함수 역할을 하게 된다.
*/


// 값을 증가 시키는 함수

function increase(value){
    return value+1;
}

// 값을 감소 시키는 함수

function decrease(value){
    return value-1;
}

// 콜백 함수를 전달 받는 고차 함수

function apply(func, value){
    return func(value); // increase(5)
}

console.log(apply(increase,5)); // 6
console.log(apply(decrease,5)); // 4
console.log(apply(function(value){return value *2;},5)); // 10

/*
    우리가 이런 식으로 변하지 않는 공통로직 ex) 더하는 함수, 빼는 함수 
    들을 미리 함수로 정의를 해두고 필요시에 호출하는 방식
    -
    콜백 함수는 자바스크립트의 특징인 함수형 프로그래밍의
    패러다임 뿐만 아니라 비동기 처리(이벤트, 타이머, ajax) 등등
    에 활용이 가장 많이 되는 패턴이다.
*/

// sort 메소드는 콜백 함수를 전달 받는다.
console.log([3,2,1,5,4].sort(function(left,right){return right-left;}));
