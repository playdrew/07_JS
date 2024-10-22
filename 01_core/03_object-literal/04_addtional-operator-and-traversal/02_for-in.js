/*
    for in 반복문
    객체의 모든 키를 순회할 수 있다.
*/

var panda = {
    name : '푸바오',
    age : 4,
    getInfo : function(){
        return `${this.name}는 ${this.age}살 입니다.`;
    }
}

// for in 연산자는 우리가 임의로 만들어둔 var key(가상의 매개변수)에 담아주게 되요
for(var key in panda){
    console.log(`key = ${key}`); // key 구문
    console.log(`panda[key]= ${panda[key]}`) // key에 해당하는 value
}