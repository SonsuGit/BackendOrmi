const babaYaga = {
    name: "John Wick",
    age: 53,
    from: "벨라루스",
    askingHim: function () {
        console.log("Yeah, I'm thinking I'm back!");
    },
};

//최신 문법을 사용하면 function 키워드 없이 메소드를 등록가능
const babaYaga2 = {
    name: "John Wick",
    age: 53,
    from: "벨라루스",
    askingHim() {
        console.log("Yeah, I'm thinking I'm back!");
    },
};

const a = "hello";
const b = "world";
const data = {
    a,
    b,
    c: "!!",
    d: [10, 20, 30],
};

// CRUD(Creat, Read, Update, Delete)
// 데이터 추가(append), 업데이트(update)
const human = {
    name: "suha",
    age: 98,
};
human.height = 184;
human[height] = 184;
human;

const human2 = {
    ...human,
    age: 10,
};

// human.keys() 이 메소드가 없습니다
Object.keys(human);
Object.values(human);
Object.entries(human);
// Object를 상속받고 있어서...
