/*
    전역 스코프와 지역 스코프
*/

var x = 'global x'; // 전역변수
var y = 'global y'; // 전역변수
var z = 'global z'; // 전역변수

function outer(){

    var z = 'outer local z'; // 지역변수
    console.log(x);
    console.log(y);
    console.log(z);
    function inner(){
        var x = 'inner local x';
        console.log(x);
        console.log(y); 
        console.log(z);  // 지역변수가 전역변수보다 우선된다.
    }
    inner(); // outer함수 스코프에서 호출
}

// console.log(z); z변수는 outer라는 함수의 스코프를 가졌기에 이 코드블럭에서만 사용가능하다. 에러뜸 : 지역변수는{}외부에서 사용이 불가능하다.
outer();