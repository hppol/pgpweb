// 온도에 맞는 추천을 출력하는 함수
function showRecommendation(temp) {
  let content = "";
  let backgroundColor = "";

  // 온도 범위에 따른 이미지 배열

  const topImages = {
    veryCold: [
      "static/images/겉옷/패딩1.png",
      "static/images/겉옷/패딩2.png",
      "static/images/겉옷/코트1.png",
      "static/images/겉옷/코트2.png",
    ],
    cold: [
      "static/images/겉옷/패딩1.png",
      "static/images/겉옷/패딩2.png",
      "static/images/겉옷/코트1.png",
      "static/images/겉옷/코트2.png",
      "static/images/겉옷/조끼1.png",
      "static/images/겉옷/조끼2.png",
    ],
    cool: [
      "static/images/겉옷/조끼1.png",
      "static/images/겉옷/조끼2.png",
      "static/images/겉옷/야구잠바1.png",
      "static/images/겉옷/야구잠바2.png",
      "static/images/겉옷/가디건1.png",
      "static/images/겉옷/가디건2.png",
      "static/images/겉옷/청자켓1.png",
    ],
    mild: [
      "static/images/겉옷/가디건1.png",
      "static/images/겉옷/가디건2.png",
      "static/images/겉옷/후드집업1.png",
      "static/images/겉옷/후드집업2.png",
      "static/images/긴팔/니트1.png",
      "static/images/긴팔/니트2.png",
      "static/images/긴팔/후드티1.png",
      "static/images/긴팔/후드티2.png",
      "static/images/긴팔/맨투맨1.png",
      "static/images/긴팔/맨투맨2.png",
    ],
    warm: [
      "static/images/반팔티/면티1.png",
      "static/images/반팔티/면티2.png",
      "static/images/긴팔/와이셔츠1.png",
      "static/images/긴팔/와이셔츠2.png",
      "static/images/반팔티/반팔셔츠1.png",
      "static/images/반팔티/반팔셔츠2.png",
      "static/images/긴팔/맨투맨1.png",
      "static/images/긴팔/맨투맨2.png",
    ],
    hot: [
      "static/images/반팔티/민소매1.png",
      "static/images/반팔티/민소매2.png",
      "static/images/반팔티/면티1.png",
      "static/images/반팔티/면티2.png",
      "static/images/반팔티/반팔셔츠1.png",
      "static/images/반팔티/반팔셔츠2.png",
    ],
    veryHot: [
      "static/images/반팔티/민소매1.png",
      "static/images/반팔티/민소매2.png",
    ],
  };

  const bottomImages = {
    veryCold: [],
    cold: [
      "static/images/긴바지/청바지1.png",
      "static/images/긴바지/청바지2.png",
      "static/images/긴바지/롱스커트1.png",
      "static/images/긴바지/롱스커트2.png",
      "static/images/긴바지/슬렉스1.png",
      "static/images/긴바지/슬렛스2.png",
      "static/images/긴바지/츄리닝1.png",
      "static/images/긴바지/츄리닝2.png",
    ],
    cool: [
      "static/images/긴바지/청바지1.png",
      "static/images/긴바지/청바지2.png",
      "static/images/긴바지/롱스커트1.png",
      "static/images/긴바지/롱스커트2.png",
      "static/images/긴바지/슬렉스1.png",
      "static/images/긴바지/슬렛스2.png",
      "static/images/긴바지/츄리닝1.png",
      "static/images/긴바지/츄리닝2.png",
    ],
    mild: [
      "static/images/긴바지/청바지1.png",
      "static/images/긴바지/청바지2.png",
      "static/images/긴바지/롱스커트1.png",
      "static/images/긴바지/롱스커트2.png",
      "static/images/긴바지/슬렉스1.png",
      "static/images/긴바지/슬렛스2.png",
      "static/images/긴바지/츄리닝1.png",
      "static/images/긴바지/츄리닝2.png",
      "static/images/반바지/5부바지1.png",
      "static/images/반바지/5부바지2.png",
      "static/images/반바지/7부바지1.png",
      "static/images/반바지/7부바지2.png",
    ],
    warm: [
      "static/images/긴바지/청바지1.png",
      "static/images/긴바지/청바지2.png",
      "static/images/긴바지/슬렉스1.png",
      "static/images/긴바지/슬렛스2.png",
      "static/images/긴바지/츄리닝1.png",
      "static/images/긴바지/츄리닝2.png",
      "static/images/반바지/5부바지1.png",
      "static/images/반바지/5부바지2.png",
      "static/images/반바지/7부바지1.png",
      "static/images/반바지/7부바지2.png",
      "static/images/반바지/미니스커트1.png",
      "static/images/반바지/미니스커트2.png",
      "static/images/반바지/반바지1.png",
      "static/images/반바지/반바지2.png",
    ],
    hot: [
      "static/images/반바지/5부바지2.png",
      "static/images/반바지/7부바지1.png",
      "static/images/반바지/7부바지2.png",
      "static/images/반바지/미니스커트1.png",
      "static/images/반바지/미니스커트2.png",
      "static/images/반바지/반바지1.png",
      "static/images/반바지/반바지2.png",
    ],
    veryHot: [
      "static/images/반바지/5부바지2.png",
      "static/images/반바지/7부바지1.png",
      "static/images/반바지/7부바지2.png",
      "static/images/반바지/미니스커트1.png",
      "static/images/반바지/미니스커트2.png",
      "static/images/반바지/반바지1.png",
      "static/images/반바지/반바지2.png",
    ],
  };

  const shoeImages = {
    veryCold: [
      "static/images/신발/부츠1.png",
      "static/images/신발/부츠2.png",
      "static/images/신발/운동화1.png",
      "static/images/신발/운동화2.png",
    ],
    cold: [
      "static/images/신발/부츠1.png",
      "static/images/신발/부츠2.png",
      "static/images/신발/운동화1.png",
      "static/images/신발/운동화2.png",
    ],
    cool: [
      "static/images/신발/부츠1.png",
      "static/images/신발/부츠2.png",
      "static/images/신발/운동화1.png",
      "static/images/신발/운동화2.png",
    ],
    mild: [
      "static/images/신발/운동화1.png",
      "static/images/신발/운동화2.png",
      "static/images/신발/슬리퍼2.png",
    ],
    warm: [
      "static/images/신발/운동화1.png",
      "static/images/신발/운동화2.png",
      "static/images/신발/슬리퍼1.png",
      "static/images/신발/슬리퍼2.png",
      "static/images/신발/샌들1.png",
      "static/images/신발/샌들2.png",
      "static/images/신발/장화1.png",
      "static/images/신발/장화2.png",
    ],
    hot: [
      "static/images/신발/운동화1.png",
      "static/images/신발/운동화2.png",
      "static/images/신발/슬리퍼1.png",
      "static/images/신발/슬리퍼2.png",
      "static/images/신발/샌들1.png",
      "static/images/신발/샌들2.png",
      "static/images/신발/장화1.png",
      "static/images/신발/장화2.png",
    ],
    veryHot: [
      "static/images/신발/운동화1.png",
      "static/images/신발/운동화2.png",
      "static/images/신발/슬리퍼1.png",
      "static/images/신발/슬리퍼2.png",
      "static/images/신발/샌들1.png",
      "static/images/신발/샌들2.png",
      "static/images/신발/장화1.png",
      "static/images/신발/장화2.png",
    ],
  };

  const itemImages = {
    veryCold: [
      "static/images/액세서리/목도리1.png",
      "static/images/액세서리/목도리2.png",
      "static/images/액세서리/장갑1.png",
      "static/images/액세서리/장갑2.png",
      "static/images/액세서리/털모자1.png",
      "static/images/액세서리/털모자2.png",
    ],
    cold: [
      "static/images/액세서리/목도리1.png",
      "static/images/액세서리/목도리2.png",
      "static/images/액세서리/장갑1.png",
      "static/images/액세서리/장갑2.png",
      "static/images/액세서리/털모자1.png",
      "static/images/액세서리/털모자2.png",
    ],
    cool: [
      "static/images/액세서리/목도리1.png",
      "static/images/액세서리/목도리2.png",
      "static/images/액세서리/장갑1.png",
      "static/images/액세서리/장갑2.png",
      "static/images/액세서리/모자1.png",
    ],
    mild: [
      "static/images/액세서리/모자1.png",
      "static/images/액세서리/모자2.png",
    ],
    warm: [
      "static/images/액세서리/모자1.png",
      "static/images/액세서리/모자2.png",
      "static/images/액세서리/선글라스1.png",
      "static/images/액세서리/선글라스2.png",
    ],
    hot: [
      "static/images/액세서리/모자1.png",
      "static/images/액세서리/모자2.png",
      "static/images/액세서리/선글라스1.png",
      "static/images/액세서리/선글라스2.png",
    ],
    veryHot: [
      "static/images/액세서리/모자1.png",
      "static/images/액세서리/모자2.png",
      "static/images/액세서리/선글라스1.png",
      "static/images/액세서리/선글라스2.png",
    ],
  };

  // 랜덤하게 이미지를 선택하는 함수
  function getRandomImage(category) {
    const images = category;
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  // 온도 범위에 따른 추천 내용
  if (temp <= 0) {
    // veryCold
    content = `
      <p>상의: <img src="${getRandomImage(
        topImages.veryCold
      )}" alt="상의" /></p>
      <p>하의: <img src="${getRandomImage(
        bottomImages.veryCold
      )}" alt="하의" /></p>
      <p>신발: <img src="${getRandomImage(
        shoeImages.veryCold
      )}" alt="신발" /></p>
      <p>아이템: <img src="${getRandomImage(
        itemImages.veryCold
      )}" alt="아이템" /></p>
    `;
    backgroundColor = "#000080"; // 네이비
  } else if (temp > 0 && temp <= 5) {
    // cold
    content = `
      <p>상의: <img src="${getRandomImage(topImages.cold)}" alt="상의" /></p>
      <p>하의: <img src="${getRandomImage(bottomImages.cold)}" alt="하의" /></p>
      <p>신발: <img src="${getRandomImage(shoeImages.cold)}" alt="신발" /></p>
      <p>아이템: <img src="${getRandomImage(
        itemImages.cold
      )}" alt="아이템" /></p>
    `;
    backgroundColor = "#4682b4"; // 스틸 블루
  } else if (temp > 5 && temp <= 13) {
    // cool
    content = `
      <p>상의: <img src="${getRandomImage(topImages.cool)}" alt="상의" /></p>
      <p>하의: <img src="${getRandomImage(bottomImages.cool)}" alt="하의" /></p>
      <p>신발: <img src="${getRandomImage(shoeImages.cool)}" alt="신발" /></p>
      <p>아이템: <img src="${getRandomImage(
        itemImages.cool
      )}" alt="아이템" /></p>
    `;
    backgroundColor = "#1e90ff"; // 도저 블루
  } else if (temp > 13 && temp <= 20) {
    // mild
    content = `
      <p>상의: <img src="${getRandomImage(topImages.mild)}" alt="상의" /></p>
      <p>하의: <img src="${getRandomImage(bottomImages.mild)}" alt="하의" /></p>
      <p>신발: <img src="${getRandomImage(shoeImages.mild)}" alt="신발" /></p>
      <p>아이템: <img src="${getRandomImage(
        itemImages.mild
      )}" alt="아이템" /></p>
    `;
    backgroundColor = "#32cd32"; // 라임 그린
  } else if (temp > 20 && temp <= 27) {
    // warm
    content = `
      <p>상의: <img src="${getRandomImage(topImages.warm)}" alt="상의" /></p>
      <p>하의: <img src="${getRandomImage(bottomImages.warm)}" alt="하의" /></p>
      <p>신발: <img src="${getRandomImage(shoeImages.warm)}" alt="신발" /></p>
      <p>아이템: <img src="${getRandomImage(
        itemImages.warm
      )}" alt="아이템" /></p>
    `;
    backgroundColor = "#87ceeb"; // 하늘색
  } else if (temp > 27 && temp <= 33) {
    // hot
    content = `
      <p>상의: <img src="${getRandomImage(topImages.hot)}" alt="상의" /></p>
      <p>하의: <img src="${getRandomImage(bottomImages.hot)}" alt="하의" /></p>
      <p>신발: <img src="${getRandomImage(shoeImages.hot)}" alt="신발" /></p>
      <p>아이템: <img src="${getRandomImage(
        itemImages.hot
      )}" alt="아이템" /></p>
    `;
    backgroundColor = "#ff4500"; // 오렌지 레드
  } else {
    // veryHot
    content = `
      <p>상의: <img src="${getRandomImage(topImages.veryHot)}" alt="상의" /></p>
      <p>하의: <img src="${getRandomImage(
        bottomImages.veryHot
      )}" alt="하의" /></p>
      <p>신발: <img src="${getRandomImage(
        shoeImages.veryHot
      )}" alt="신발" /></p>
      <p>아이템: <img src="${getRandomImage(
        itemImages.veryHot
      )}" alt="아이템" /></p>
    `;
    backgroundColor = "#ff6347"; // 토마토
  }

  document.getElementById("recommendation-result").innerHTML = content;
  document.body.style.backgroundColor = backgroundColor;
}

window.onload = function () {
  showRecommendation(window.currentTemperature);
};

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-temperature");
  const temperatureElement = document.getElementById("temperature-value");
  let isCelsius = true; // 현재 단위를 추적

  toggleButton.addEventListener("click", function () {
    // 온도 값을 가져오기
    let temperatureText = temperatureElement.innerText;
    let temperatureMatch = temperatureText.match(/[-]?\d+(\.\d+)?/); // 숫자 추출
    if (!temperatureMatch) return; // 온도가 없으면 종료

    let currentTemperature = parseFloat(temperatureMatch[0]);

    if (isCelsius) {
      // 섭씨 -> 화씨 변환
      let fahrenheit = (currentTemperature * 9) / 5 + 32;
      temperatureElement.innerText = `최근 온도: ${fahrenheit.toFixed(1)}°F`;
      toggleButton.innerText = "섭씨로 변환";
    } else {
      // 화씨 -> 섭씨 변환
      let celsius = ((currentTemperature - 32) * 5) / 9;
      temperatureElement.innerText = `최근 온도: ${celsius.toFixed(1)}°C`;
      toggleButton.innerText = "화씨로 변환";
    }

    isCelsius = !isCelsius; // 단위 상태 변경
  });
});
