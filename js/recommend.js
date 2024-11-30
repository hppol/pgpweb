function showRecommendation(temp) {
  let content = "";
  let backgroundColor = "";

  // 온도에 따른 추천 내용
  if (temp <= 0) {
    content = `
      <p>하의: 두꺼운 바지</p>
      <p>상의: 두꺼운 코트</p>
      <p>신발: 부츠</p>
      <p>아이템: 장갑, 목도리, 모자</p>
    `;
    backgroundColor = "#4682b4"; // 서늘한 남색
  } else if (temp <= 5) {
    content = `
      <p>하의: 울바지</p>
      <p>상의: 두꺼운 스웨터</p>
      <p>신발: 부츠</p>
      <p>아이템: 따뜻한 양말</p>
    `;
    backgroundColor = "#1e90ff"; // 차가운 파란색
  } else if (temp <= 10) {
    content = `
      <p>하의: 청바지</p>
      <p>상의: 니트</p>
      <p>신발: 부츠</p>
      <p>아이템: 가벼운 스카프</p>
    `;
    backgroundColor = "#87ceeb"; // 밝은 스카이 블루
  } else if (temp <= 15) {
    content = `
      <p>하의: 면바지</p>
      <p>상의: 가벼운 재킷</p>
      <p>신발: 운동화</p>
      <p>아이템: 가벼운 모자</p>
    `;
    backgroundColor = "#98fb98"; // 연한 민트 그린
  } else if (temp <= 20) {
    content = `
      <p>하의: 면바지</p>
      <p>상의: 긴팔 셔츠</p>
      <p>신발: 운동화</p>
      <p>아이템: 얇은 자켓</p>
    `;
    backgroundColor = "#fffacd"; // 밝은 레몬색
  } else if (temp <= 25) {
    content = `
      <p>하의: 반바지</p>
      <p>상의: 반팔 티셔츠</p>
      <p>신발: 운동화</p>
      <p>아이템: 선글라스</p>
    `;
    backgroundColor = "#ffd700"; // 따뜻한 금색
  } else if (temp <= 30) {
    content = `
      <p>하의: 얇은 반바지</p>
      <p>상의: 민소매 티셔츠</p>
      <p>신발: 슬리퍼</p>
      <p>아이템: 모자</p>
    `;
    backgroundColor = "#ffa07a"; // 밝은 살구색
  } else {
    content = `
      <p>하의: 매우 얇은 반바지</p>
      <p>상의: 민소매</p>
      <p>신발: 슬리퍼</p>
      <p>아이템: 선크림, 물병</p>
    `;
    backgroundColor = "#ff4500"; // 강렬한 오렌지
  }

  // 결과 내용과 배경 색상을 업데이트
  document.getElementById("recommendation-result").innerHTML = content;
  document.body.style.backgroundColor = backgroundColor;
}
