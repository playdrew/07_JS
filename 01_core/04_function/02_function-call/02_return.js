function hello(name){
    return `${name} 헬로우~`;
    // java 와 마찬가지로 return 은 가장 마지막 줄에 있어야 한다.
    // 하지만 자바스크립트는 error 가 아닌 무시를 하게 된다.
    console.log('dadd');
}

// 값에 따라서 자료형을 알아서 입혀주기 때문에 동적으로 입혀주기 때문에 자료형이 자바스크립트에선 필요없다

console.log(hello('조평훈'));

function fuc(){
    console.log('함수 호출됨...');
    //return;  아무것도 없으므로 undefined 라고 나옵니다. return; 을 지워도 undefined 라고 뜹니다.
    //반환값을 명시적으로 지정하지 않으면 undefined 가 된다.
    //생략을 하더라도 undefined이다.
}

console.log(fuc());