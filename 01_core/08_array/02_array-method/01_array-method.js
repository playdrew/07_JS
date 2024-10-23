/*
    Array 가 가지고 있는 메소드
*/

// 기준이 될 배열 생성
const foodList = ['싸이버거','냉면','물회','짜장면','물회'];

/*
    indexOf : 배열의 요소가 위치하는 인덱스 리턴
    LastIndexOf : 배열의 요소가 위치한 마지막 인덱스 리턴
    include : 배열에 해당 요소가 포함하는 지 여부 리턴
*/

console.log(`indexof(인자) : ${foodList.indexOf('물회')}`); // 0 1 2 번째 인덱스에 위치한 물회 반환
console.log(`indexof(인자,3) : ${foodList.indexOf('물회',3)}`); // 3번째 인덱스 이후로 
console.log(`indexof(존재하지 않는 요소) : ${foodList.indexOf('삼겹살')}`); // -1
console.log(`includes(인자) : ${foodList.includes('물회')}`); // true
console.log(`includes(없는 요소 ) : ${foodList.includes('삼겹살')}`); // false 조건문이나 분기문 만드는데 유리

// 기준 배열
const chineseFood = ['짜장','짬뽕','탕수육'];
// push, pop 전 챕터에서 다루었기 때문에 pass
// unshift : 배열의 맨 앞에 요소 추가
// shift : 배열의 맨 앞 요소 제거
console.log(`변경 전 중국음식 : ${chineseFood}`);
chineseFood.unshift('팔보채');
chineseFood.unshift('동파육');
console.log(`변경 후 중국음식 : ${chineseFood}`);
chineseFood.shift();
console.log(`변경 후 중국음식 : ${chineseFood}`);

// 두 개 이상의 배열을 결합
const idol = ['비투비','아이브','블랙핑크'];
const idol2 = ['소녀시대','원더걸스','샤이니'];
const idol3 = ['뉴진스','BTS','세븐틴','빅뱅'];

// concat(배열명1, 배열명2, ...)
const mix = idol.concat(idol2);
console.log(mix);
const mix2 = idol3.concat(idol,idol2);
console.log(mix2);

// slice : 배열의 요소 선택 잘라내기
// splice : 배열의 index 위치의 요소 제거 및 추가
const backend = ['java','spring','servlet','mybatis'];
console.log(`slice(1,3) : ${backend.slice(1,3)}`);
console.log(backend); // 원본배열이상없음

// (index, 제거수, 추가값1, 추가값2, ... )
console.log(`splice(3,1,'jdbc') : ${backend.splice(3,1,'jdbc')}`); // 1은 3위치의 하나를 삭제하겠다.
console.log(backend);

// 배열의 순서 뒤집기
console.log(`reverse() : ${[1,2,3,4,5].reverse()}`);