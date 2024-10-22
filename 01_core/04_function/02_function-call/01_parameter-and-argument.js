/*
    매개변수와 전달인자
*/

function hello(name){
    // 마찬가지로 매개변수는 해당 함수 몸체({})내에서만 사용 가능
    console.log(name);
    // 모든 전달인자들은 암묵적으로 arguments 객체의 프로퍼티로 보관
    console.log(arguments);

    return `${name}님 헬로우~`
}

// 함수 호출
var result = hello('조평훈');
console.log(result);

// console.log(name); 안되는데 매개변수는 공간내부에서만 사용한 것이지 외부에서는 사용불가

// 매개변수와 전달인자 갯수 불일치
// 전달인자를 전달하지 않더라도 undefined 로 뜬다.
// 아래는 인자의 갯수를 부족하게 하면 undefined가 된다.
result = hello();
console.log(result);

// 두 번째 것은 무시가 되나 내부에 argument에 저장은 해둡니다.
// 인자의 갯수가 더 많은 경우에는 초과된 인자는 무시된다.
// 하지만, 암묵적으로 argument 객체에 보관은 해둔다
result = hello('조평훈','조평순');
console.log(result);

function hi(name='기본값'){

    // if(arguments.length !== 1 || typeof name !== 'string' || name.length === 0 ){
    //     console.log('인수는 1개 이어야 하며, 문자열 값이고 , 빈문자열은 허용하지 않습니다.')
    // }
    return `${name}님 하이~`
}

// arguments 객체를 이용해서 적절한 인자가 전달되었는지 확인하기 
//result = hi('조평훈','조평순')
//result = hi(1);
//result = hi('');
//result = hi();
console.log(result);