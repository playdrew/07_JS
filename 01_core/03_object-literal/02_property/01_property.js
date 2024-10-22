/*
    객체는 프로퍼티의 집합이다
    프로퍼티는 항상 key 와 value 세트로 구성된다.
*/


/*
    프로퍼티 key 란
    빈  문자열을 포함하는 모든 문자열 또는 심볼
    value 에 접근하기 위한 식별자의 열할을 하게 된다.
    문자열이기 때문에 key는 ''로 감싸야 하지만,
    네이밍 규칙만 맞춘다면 ''은 생략이 가능하다.
    규칙을 위반하게 되면 ''는 반드시 사용해야한다.
*/

// 프로퍼티파일은 키는 항상 String 벨류는 어떤 값이든 들어갈수있었고요

var obj = {
    normal : 'hi', // 작성규칙 맞추면 ''생략가능
    // @ s p a c e @ : 'space value', 빈문자열 특수문자 네이밍규칙위반 아래 수정
    '@ s p a c e @' : 'space value',
    '':'', // 빈문자열의 경우에는 오류 발생 x 하지만 권장하지 않음
    0:1, // 숫자키는 내부적으로 문자열로 변환이 된다.
    var : 'var', // 예약어를 key로 사용할 수 있다 하지만 권장하지 않음
    normal : 'new value' // 이미 존재하는 키를 중복 선언하면 나중에 선언한 프로퍼티로 덮어쓰게 된다.
};


// 출력시 순서는 정수 key 는 자동 정렬, 그 외 프로퍼티는 작성 순서로 정렬 
console.log(obj);

// 프로퍼티 동적으로 추가하기
var key = 'test';

// test : test value 
// 키에 해당하는 value 대입연산자 오른쪽
// 대괄호 표기법
// index 대신에 key값이 존재한다 생각
// key 로 인해 값에 접근한다.
obj[key] = 'test value';

console.table(obj);