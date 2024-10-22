/*
    프로퍼티에 접근하는 방법
    1. 마침표 표기법(.)
    2. 대괄호 표기법([])
*/


var panda = {
    name : '푸바오',
    eat : function(food){
        console.log(`${this.name}는 ${food}(을)를 맛있게 먹어요`);
    }
};

// 마침표 표기법 확인
console.log(panda.name);

// 대괄호 표기법 확인 -> 프로퍼티 키는 반드시 따옴표로 감싼 문자열 사용
// 판다가 가지고 있는 []안의 키값
console.log(panda['name'])
panda['eat']('죽순');

// 대괄호 표기법을 쓸 수 밖에 없는 상황
var obj = {
    'dash-key': 'value',
    0 : 1 
};

// 프로퍼티의 키가 네이밍규칙을 위반하는 경우 마침표표기법을 사용할수없다
// console.log(obj.dash-key); 이렇게 마침표표기법으로 하면 오류걸려요 

console.log(obj['dash-key']);
// 대괄호 표기법은 ''로 key로 감싸자
// console.log(obj[dash-key]); 대괄호 표기법은 항상 ''로 감싸지 않으면 에러

console.log(obj['0']);
// 아래는 되는데 암묵적 타입변환이 일어나기 때문입니다.
// 프로퍼티 키가 정수값으로 된 경우에는 ''를 생략할 수 있다.
console.log(obj[0]);