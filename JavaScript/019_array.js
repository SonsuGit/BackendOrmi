const arr1 = [];
const arr2 = [1, 2, 3];
const arr3 = new Array(4, 5, 6);

const arr = [[10, 20], 2, 3, 4, 5];
arr[0];
arr[0][0];
arr.length;
arr.pop();
arr.pop(2); // 들어가는 값과 상관 없이 마지막 값을 꺼냅니다. (index나 value와 무관함)
arr.push();

const arr4 = [1, 2, 3, 4, 5];
arr4.shift();
arr4.unshift(100);
arr4.unshift(100, 2000, 3000);

const arr5 = [1, 2, 3, 4, 5];
// splice() 메소드는 배열의 요소를 추가, 제거 또는 교체
// array.splice(start, deleteCount, changeitem)
arr5.splice(1, 0, 100);
arr5;

arr5.splice(1, 0, 100);
arr5;

const arr6 = [10, 20, 30, 40, 50, 60];
arr6.slice(2, 5);

const arr7 = [1, 11, 2, 3, 7, 8, 5];
arr7.sort();

// 오름차순
arr7.sort((a, b) => a - b);

// 내림차순
arr7.sort((a, b) => b - a);

// forEach 자주 사용합니다.
// forEach는 반복만 합니다
// 새로운 arr를 만들고 싶다면 map을 사용해주세요.
const arr8 = [1, 11, 2, 3, 7, 8, 5];

arr8.forEach((item, index, arr) => {
  console.log(item);
  console.log(index);
  console.log(arr);
});

const arr9 = [1, 11, 2, 3, 7, 8, 22, 5];
arr9.forEach((v, i) => {
  console.log(v); // value
  console.log(i); // index
});

const arr10 = [1, 11, 2, 3, 7, 8, 22, 5];
arr9.forEach((v, i) => {
  const tag = document.getElementById(i);
  tag.innerHTML = v;
});

// filter도 forEach처럼 v, i, a 세개 다 사용가능
const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr11.filter((el) => el % 2 === 0);
console.log(newArr);

// https://school.programmers.co.kr/learn/courses/30/lessons/120583?language=javascript
function solution(array, n) {
  return array.filter((v) => v == n).length;
}

//reduce
//JavaScript에는 Math.min, Math.max는 있지만 Math.sum은 없습니다. 따라서 배열의 요소를 모두 더해주고 싶을 경우 아래 reduce 메서드를 사용해야 합니다. a(accumulator)는 누적값, c(currentValue)는 가산 값입니다. 이때, 초깃값이 없으면 애러가 날 수 있는 경우가 있으니 주의해주세요.
[1, 2, 3, 4]
  .reduce((a, c) => {
    console.log(a, c);
    return a + c;
  })

  [(1, 2, 3, 4)].reduce((a, c) => a + c, 0);

// 우리가 생각하는 것처럼 in이 작동하지 않습니다.
// 여기서 in 앞에 나오는 값은 key(index)입니다.
10 in [10, 20, 30, 40]; // false
1 in [10, 20, 30, 40]; // true(1이라는 인덱스가 있음)
"one" in { one: 1, two: 2 }; // true

const arr12 = ["hello", "world", "hojun"];
arr1
  .join("!") // hello!world!hojun

  [
    // map은 파이썬과 유사
    // map은 아래 형태보다, 데이터를 뽑아내는 형태로 많이 사용합니다.
    (1, 2, 3, 4)
  ].map((x) => x ** 2)

  [([10, 20], [20, 30], [30, 40])].map((v) => v)
  [([10, 20], [20, 30], [30, 40])].map((v) => v[0])
  [
    // 성이 3글자라는 전제를 하고
    // 3글자씩만 뽑아내겠습니다.
    ("suhason", "suhakim", "suhalee")
  ].map((v) => v.slice(4, 7))
  [("suhason", "suhakim", "suhalee")].map((v, i) => [v.slice(4, 7), i])

  [
    // 아래와 같이 json data에서 data 추출. 어레이로 내보냄
    ({
      name: "hojun",
      age: 10,
    },
    {
      name: "gildong",
      age: 20,
    })
  ].map((x) => x.age)
  [
    // 원래 map(v, i, obj)

    ({
      name: "hojun",
      age: 10,
    },
    {
      name: "gildong",
      age: 20,
    })
  ].map((v, i, obj) => {
    console.log(v, i, obj);
    return v;
  })

  [
    ({
      name: "hojun",
      age: 10,
    },
    {
      name: "gildong",
      age: 20,
    })
  ].map((v) => v["age"]);

// python : map(function, iterable)
// javascript : iterable.map(function)

let data = [
  {
    name: "lee hojun",
    age: 10,
  },
  {
    name: "kim junho",
    age: 20,
  },
  {
    name: "sin sunghun",
    age: 30,
  },
];

answerarray[
  // 원하는 데이터
  // 위 데이터를 가지고 아래와 같이 새로운 array를 만들고 싶습니다. 정답 코드를 작성해주세요.
  ([0, "hojun", 10], [1, "junho", 19], [2, "sunghun", 29])
];

let answerarray = data.map((v, i) => [i, v["name"].slice(4), v["age"] - 1]);
