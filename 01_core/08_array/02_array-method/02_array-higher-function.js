/*
    배열의 고차 함수
    - 고차 함수란? 함수를 인자로 전달 받는 함수를 의미한다.
*/

// sort() : 배열을 정렬해주는 함수
let numbers = [];

for(let i = 0 ; i<10 ; i++){
    numbers[i] = Math.floor(Math.random()*100)+1;
}

console.log(`정렬 하기 전 numbers 배열 : ${numbers}`);

/*
    sort : 오름차순이 기본 정렬이며
    배열을 기본적으로 문자열로 정렬이 되기 때문에
    한 자리수, 세자리 수가 옳바르게 정렬이 되지 않는 모습을 확인 할 수 있다.
    따라서 다른 정렬 기준을 사용하기 위해서는 매개변수로 compare 이라는
    함수를 전달해야 한다. 
*/

numbers.sort();

console.log(`정렬 후 numbers 배열 : ${numbers}`);

// 숫자 오름차순 정렬
function compare(a,b){
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1; 
}

numbers.sort(compare);

console.log(`인자로 compare 함수 전달 후 정렬 : ${numbers}`);

// 숫자 내림차순 정렬
numbers.sort((a,b) => b-a);

console.log(`인자로 함수 작성해서 내림차순 정렬 : ${numbers}`)

/*
    배열에서 제공하는 foreach()
    - for 대체할 수 있는 고차함수
    배열.forEach(function(item,index,array){})
*/
// item index array 는 매개변수다. 이름을 맘대로 지을수 있다는 것

numbers = [1,2,3,4,5];

numbers.forEach(function(item,index,array){
    console.log(`item : ${item}`);
    console.log(`index : ${index}`);
    console.log(`array : ${array}`)
});

/*
    forEach()
    1번째 인자 : item 즉 요소(value)
    2번째 인자 : index 즉 요소가 위치하는 번호
    3번째 인자 : array 자신이 포함 된 배열 정보
*/

// 배열의 forEach 로 요소출력하기
numbers.forEach(item=>console.log(item));

//*********************************************************
// 배열의 map() : 배열 요소 전체를 대상으로 콜백함수 호출 후
//               반환 값들로 새로운 배열을 반환
// 배열.map(function(item,index,array))
//*********************************************************

const types = [true,1,'text'].map(item => typeof item);
// 기존 배열을 순회 후 우리가 작성한 함수 내부의 조건들로 다시 
// 새로운 배열 반환
console.log(types) // [ 'boolean', 'number', 'string' ]

const length = ['apple','banana','mango'].map(item => item.length); 
console.log(length); // [ 5, 6, 5 ]
console.log(global.length === length); // global 은 자바에서 object 같은 전역객체이다.

// filter

/*
    배열의 filter() -> 검색 기능에 굉장히 많이 사용 될 예정
    - 배열의 요소 전체를 대상으로 콜백함수 호출 후 
    - 반환 값이 true 인 녀석들로 새로운 배열 반환
*/

// 홀수(odd)
const odds = numbers.filter(item => item%2 );
console.log(odds); // [ 1, 3, 5 ] true 인 녀석들로만 반환해준다

/*
    배열의 reduce()
    - 배열을 순회하며 각 요소에 대하여 이전의 콜백함수 실행 반환값을
    - 전달하여 콜백 함수 실행 후 결과 반환
    - previousValue : 이전 콜백의 반환 값
    - currentValue : 배열 요소의 값
    - currentIndex : 인덱스
    - array : 자신이 속한 배열 
*/

numbers.reduce((pre,currV,currI,array)=>{
    console.log(`previousValue : ${pre}`);
    console.log(`currentValue : ${currV}`);
    console.log(`currentIndex : ${currI}`);
    console.log(`array : ${array}`);
});

const sum = numbers.reduce((pre,currV)=>{
    return pre + currV; // return 한 결과는 다음 콜백의 첫번째 인자로 전달
});

console.log(`sum : ${sum}`);

/*
    배열의 some()
    - 배열 내 일부요소과 콜백 함수의 테스트를 통과하는 지 확인하여
    - 결과를 boolean 타입으로 반환
*/

// 배열의 요소 중 10보다 큰 값이 1개 이상 존재하는 지 확인
// some 도 item index array 를 가진다
let result = [1,4,5,8,9].some(item => item >10);
console.log(`result:${result}`); // result:false

// [1,4,5,7,9] 배열에서 짝수가 있는지 확인
// 여러줄을 사용하면 중괄호블럭이 생략불가능하다.
let even = [1,4,5,7,9].some(item => item%2==0);
console.log(`even:${even}`);

/*
    배열 내의 모든 요소가 테스트를 통과 하는지 확인하는 every()
    boolean 타입으로 반환한다.
*/
// some은 조건을 하나라도 만족하면 true 를 반환했는데 every는 아니에요 
result = [1,4,5,3,2].every(item => item>3);
console.log(`every result : ${result}`);

/*
    배열의 find()
    - 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행
    - 결과가 참인 첫번째 요소를 반환, 참인 요소가 존재하지 않으면 undefined
*/

// student 배열에 객체 할당
const student = [
    {name : '조평훈', score : 100},
    {name : '김남규', score : 95},
    {name : '김규남', score : 85},
]

result = student.find(item => item.name == '조평훈');
console.log(result);

// student 배열에서 90 점 넘는 학생만 추출하기
result = student.filter(item => item.score>=90);
console.log(result);