fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    console.log("1. 전체 product의 갯수 :", data.length);
    let avg = 0;
    for (const v of data) {
      avg += v.price;
    }
    avg /= data.length;
    console.log("2. 전체 가격의 평균 :", avg);
  });
