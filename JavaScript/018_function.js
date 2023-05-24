function f(x, y) {
  return x + y;
}

// 이름없는 함수도 가능
(function (x, y) {
  return x + y;
});

// 즉시 실행함수, 정의와 동시에 실행되는 함수
(function () {
  console.log("Hello");
});

// python에서는 lambda는 재사용하지 않는 함수에서 많이 사용되지만
// JavaScript에서는 화살표 함수가 일반 함수만큼 자주 사용됩니다.(화살표 함수의 문법이 나온지 그리 오래되진 않았습니다. 10년은 안됨)

// 1. 중괄호가 없고 return 코드 1줄이면 return 생략합니다.
let f2 = (x, y) => x + y;

// 2. 중괄호가 생기면 return이 있어야함
let f3 = (x, y) => {
  let z = x + y;
  return z;
};

// 3. 파라미터가 1개이면 소괄호도 생략할 수 있습니다.
let f4 = (x) => x + x;

// 반지름이 입력되면 원의 넓이를 구하는 화살표 함수를 만들어주세요. 가능하면 가장 단축된 방법으로.
let area = (x) => x * x * Math.PI;
area(3);

// 다음처럼 여러 값이 입력 되었을 때, 가장 큰 값과 가장 작은 값, 총합을 출력하는 함수를 만들어주세요.
function func(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  let ans = [];
  ans.push(Math.max(args));
  ans.push(Math.min(args));
  ans.push(sum);
  return ans;
}

func(10, 20, 30);
//위에거 안됨..

입력: 함수이름(10, 20, 30, 40);
출력: [40, 10, 100];

function f6(a, b, c, d) {
  max = Math.max(a, b, c, d);
  min = Math.min(a, b, c, d);
  sum = a + b + c + d;
  return [max, min, sum];
}

let f7 = (a, b, c, d) => {
  max = Math.max(a, b, c, d);
  min = Math.min(a, b, c, d);
  sum = a + b + c + d;
  return [max, min, sum];
};
