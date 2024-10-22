/*
    java case
    - int x = 10;
    - if(x)

    javascript case
    - 된다. 값들을 불리언 타입으로 바꿔준다
*/

/*
    자바스크립트 엔진은 불리언 타입이 아닌 값을
    Truthy 값 (참으로 평가되는 값)
    과
    falsy 값 (거짓으로 평가되는 값)
    으로 구분을 해준다.

    Falsy 값은 정해져있다.
    - false , undefined , null , 0 , NaN , ''
    - 이 친구들은 falsy 값이며
    - 이 친구들을 제외한 모든 값은 Truthy 값이다.
*/

if(true) console.log('동작하니?');
if(false) console.log('동작하니?'); // 조건을 만족하지 않으니까 console.log('동작하니?');는 수행되지 않음
if(undefined) console.log('동작하니?'); 
if(4) console.log('동작하니?'); // 0이 아닌 값은 true 로 인식되기에 실행됩니다
if('') console.log('동작하니?') // '' Falsy 값이므로 수행하지 않음

