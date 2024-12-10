document.addEventListener("DOMContentLoaded", () => {
  const weatherInfo = document.getElementById("weather-info");

  // 예제 데이터 (API 대신 임시 데이터 사용)
  const sampleWeatherData = {
    temperature: "20°C",
    condition: "맑음",
  };

  weatherInfo.innerHTML = `
        <p>온도: ${sampleWeatherData.temperature}</p>
        <p>날씨: ${sampleWeatherData.condition}</p>
    `;
});
