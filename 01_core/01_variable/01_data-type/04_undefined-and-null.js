/*
    04.undefined
    undefined 타입의 값은 undefined 가 유일하다.
    var test; 선언된 변수는 암묵적으로 undefined 값으로
    초기화가 된다.
    자바스크립트 언어를 동작하게 만드는 것은
    자바스크립트 엔진 이라는 것이다.
    undefined 는 엔진이 변수를 초기화할 때 사용하는 
    값으로서 실제 개발자들이 undefined 로 초기화 하는 것은
    지양한다.(쓰지말라)
*/

var undef; // 선언만
console.log(undef);

/*
    null 타입
    null -> 아무것도 참조하지 않는다
    그렇다는 것은 카비지컬렉터가 메모리를 청소할 때
    null 을 제거한다.
*/

var nullVal = 'hi';
nullVal = null; // 이전에 참조하고 있는 hi 공간을 제거
console.log(nullVal);

