if (true) {
  console.log("hello");
}

if (false) {
  console.log("hello1");
} else if (false) {
  console.log("hello2");
} else if (false) {
  console.log("hello3");
} else if (true) {
  console.log("hello4");
} else {
  console.log("hello5");
}

// if로 썼을 때 보다 가독성이 좋아지는 효과가 있습니다.
switch (
  2 // 문자열도 들어갈 수 있습니다.
) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
    break;
}

switch (new Date().getDay()) {
  case 1:
    console.log("월요일입니다.");
    break;
  case 2:
    console.log("화요일입니다.");
    break;
  case 3:
    console.log("수요일입니다.");
    break;
  case 4:
    console.log("목요일입니다.");
    break;
  case 5:
    console.log("금요일입니다.");
    break;
  default:
    console.log("금금요일입니다. 주말이 뭐죠?");
    break;
}

switch (new Date().getDay()) {
  case 1:
    console.log("월요일입니다.");
    break;
  case 2:
    console.log("화요일입니다.");
    break;
  case 3:
    console.log("수요일입니다.");
    break;
  case 4:
    console.log("목요일입니다.");
    break;
  case 5:
    console.log("금요일입니다.");
    break;
  case 6:
  case 7:
    console.log("주말입니다.");
    break;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//무한반복
for (;;) {}

for (const key in [10, 20, 30]) {
}

for (const key in { one: 1, two: 2 }) {
  console.log(key);
}

for (const i of [10, 20, 30]) {
  console.log(i);
}

let x = 0;
while (x < 0) {
  console.log(x);
  ++x;
}
