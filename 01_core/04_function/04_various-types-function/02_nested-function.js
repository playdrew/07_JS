/*
    함수 내부에 함수를 정의 하는 것을
    중첩함수 혹은 내부 함수 라고 한다.
*/

/*
    일반적으로 중첩 함수의 경우 자신을 포함하는 외부 함수를
    도와주는 헬퍼 함수의 역할을 하게 된다.
*/

function outer(){

    var outerValue = '외부함수가 가지고 있는 변수' // 필드

    function inner(){
        var innerValue = '내부함수가 가지고 있는 변수';
        // 외부 함수의 변수를 참조할 수 있다.
        console.log(innerValue, outerValue); 
    }
    // 내부 함수의 변수는 외부 함수 스코프에서 사용할 수 없다.
    // console.log(innerValue); 여기선 사용할 수 없다
    inner(); // 이걸 작성하기 전에는 outer() 아무것도 안뜬다
}

//innerValue is not defined
outer();

//inner is not defined
//inner();