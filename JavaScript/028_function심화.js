// rest 문법을 이용할 때 주의해야할 점은
// 1. 매개변수에는 하나의 `rest`만 존재할 수 있습니다.
// 2. `rest`는 반드시 함수 정의의 마지막 매개변수여야 합니다.
function 함수2(a, b, ...c) {
    console.log(c);
    return Math.max(...c);
}

함수2("hello", "world", 10, 20, 30, 40);

function 함수2([a, b], ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

함수2([1, 2], 10, 20, 30, 40);

// 매개변수의 초기화
// 매개변수 초기화를 할 수 있으나 순서를 바꿔 아규먼트를 삽입하는것은 불가능합니다.
function 함수3(a = 10, b = 20, c = 30) {
    return a + b + c;
}
console.log(함수3((c = 1000), (a = 2000))); // 3020이 되어야 하는거 아니에요?
// 3030

// 값이 순서대로 들어갔습니다.
function 함수2(a, b, ...c) {
    console.log(c);
    return Math.max(...c);
}

함수2("hello", "world", 10, 20, 30, 40);

function 함수2([a, b], ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

함수2([1, 2], 10, 20, 30, 40);

// 매개변수의 초기화
// 매개변수 초기화를 할 수 있으나 순서를 바꿔 아규먼트를 삽입하는 것은 가능하지 않습니다.
function 함수3(a = 10, b = 20, c = 30) {
    return a + b + c;
}

console.log(함수3((c = 1000), (a = 2000)));

// 스코프
let z = 100;
function sum(x) {
    // x는 매개변수(parameter)이면서 지역변수(local val)
    let y = 50; // y는 지역변수
    z = z + y;
    return x + y;
}
console.log(sum(10)); // 10은 전달인자(argument)
// console.log(x);
// console.log(y);
console.log(z); // python하고 다른점(허락하지 말았어야 하는 내용입니다.)

// 블록 레벨 스코프
if (true) {
    // for문이어도 마찬가지입니다.
    let x = 10;
    const y = 10;
}
console.log(x, y);

{
    let a = 10;
    const b = 10;
    console.log(a);
    console.log(b);
    {
        let a = 15;
        const b = 15;
        console.log(a);
        console.log(b);
        {
            let a = 20;
            console.log(a);
            console.log(b);
        }
    }
}

// 콜백함수
// 콜백함수란 함수에 매개변수로 전달되어 실행되는 함수
// 함수에 아규먼트로 전달

function sum(x, y) {
    return x + y;
}

function custom(x, y, func) {
    return func(x, y) + func(x, y);
}

custom(10, 20, sum)// arr.filter(콜백함수) // arr.sort(콜백함수) // arr = [1, 2, 3]
// arr.map(콜백함수)

// 함수의 호이스팅

`
// python에서는 error이빈다.
hello()

def hello():
    print('helllo')
`;

hello();

function hello() {
    console.log("hello");
}

// 즉시 실행함수
// 익명 즉시 실행 함수
(function () {
    let a = 1;
    let b = 2;
    return a + b;
})();

// 기명 즉시 실행 함수
(function foo() {
    let a = 3;
    let b = 5;
    return a * b;
})();

foo(); // ReferenceError: foo is not defined
// 어차피 실행하지 못해서 의미가 없음.
// 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리
