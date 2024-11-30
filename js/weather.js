document.addEventListener("DOMContentLoaded", () => {
  const weatherInfo = document.getElementById("weather-info");

  // 예제 데이터 (API 대신 임시 데이터 사용)
  const sampleWeatherData = {
    temperature: "20°C",
    condition: "맑음",
    location: "서울",
  };

  weatherInfo.innerHTML = `
        <p>위치: ${sampleWeatherData.location}</p>
        <p>온도: ${sampleWeatherData.temperature}</p>
        <p>날씨: ${sampleWeatherData.condition}</p>
    `;
});
