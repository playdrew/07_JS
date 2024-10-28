/*
    배열의 고차함수 예제
*/

// 생성자 함수를 통해 여러 명의 회원 생성
function Student(name, age, score) {
    this.name = name;
    this.age = age;
    this.score = score;
    this.getInfo = () => {
        return `${this.name} 님의 성적은 ${this.score} 입니다.`;
    }
}

// 5명의 회원을 생성 후 ohgiraffers 배열에 담기
const member1 = new Student('조평훈', 20, 100);
const member2 = new Student('조평평', 21, 89);
const member3 = new Student('조평순', 15, 75);
const member4 = new Student('조팽팽', 24, 100);
const member5 = new Student('조핑구', 45, 49);

const ohgiraffers = [
    member1, member2, member3, member4, member5
];

console.log(ohgiraffers);

// 만들어진 ohgiraffers 배열을 활용해서 고차함수 연습

// 모든 문제의 출력 구문은 getInfo() 를 사용해서 출력한다.

// ohgiraffers 배열을 성적 순으로 정렬

ohgiraffers.sort((a, b) => b.score - a.score);

ohgiraffers.forEach(member => {
    console.log(member.getInfo);
})

const sortedByScore = ohgiraffers.slice().sort((a, b) => b.score - a.score);
console.log("성적 순으로 정렬:");
sortedByScore.forEach(member => console.log(member.getInfo()));
// b.score - a.score = (-n) , b<a , a가 b의 앞에 오도록
// b.score - a.score = (+n) , a>b , b가 a의 앞에 오도록

// ohgiraffers 배열을 나이 역순으로 정렬

const sortedByAgeDesc = ohgiraffers.slice().sort((a, b) => b.age - a.age);
console.log("\n나이 역순으로 정렬:");
sortedByAgeDesc.forEach(member => console.log(member.getInfo()));

// ohgiraffers 배열을 이름 순으로 정렬

const sortedByName = ohgiraffers.slice().sort((a, b) => a.name.localeCompare(b.name));
console.log("\n이름 순으로 정렬:");
sortedByName.forEach(member => console.log(member.getInfo()));

// ohgiraffers 배열을 활용해서 성적이 50 이상인
// 사람만 출력하는 구문을 작성해보자

const above50Score = ohgiraffers.filter(member => member.score >= 50);
console.log("\n성적이 50 이상인 사람:");
above50Score.forEach(member => console.log(member.getInfo()));

// ohgiraffers 배열을 활용해서 성적이 70 ~ 90 이상인
// 사람만 출력하는 구문을 작성해보자

const between70And90Score = ohgiraffers.filter(member => member.score >= 70 && member.score <= 90);
console.log("\n성적이 70 ~ 90 이상인 사람:");
between70And90Score.forEach(member => console.log(member.getInfo()));

// ohgiraffers 배열을 활용해서 성적이 동일한 사람을
// 출력하는 구문을 작성해보자

const scoreCount = {};
ohgiraffers.forEach(member => {
    if (!scoreCount[member.score]) {
        scoreCount[member.score] = [];
    }
    scoreCount[member.score].push(member);
});

console.log("\n성적이 동일한 사람들:");
for (const score in scoreCount) {
    if (scoreCount[score].length > 1) {
        scoreCount[score].forEach(member => console.log(member.getInfo()));
    }
}


// ohgiraffers 배열을 활용해서 조평훈 이라는 학생의
// 성적 정보를 변경해보자

const studentToUpdate = ohgiraffers.find(member => member.name === '조평훈');
if (studentToUpdate) {
    studentToUpdate.score = 95; // 성적 변경
    console.log("\n조평훈 학생의 성적이 변경되었습니다:");
    console.log(studentToUpdate.getInfo());
}


// ohgiraffers 배열을 활용해서 조평훈 이라는 학생의
// 몸무게 정보를 추가해보자. weight -> 80 으로 추가

if (studentToUpdate) {
    studentToUpdate.weight = 80; // 몸무게 추가
    console.log("\n조평훈 학생의 몸무게가 추가되었습니다:");
    console.log(`조평훈 님의 몸무게는 ${studentToUpdate.weight}kg 입니다.`);
}