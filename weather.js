async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "1d6783d77841400d9b592733251904";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  
    const resultDiv = document.getElementById("weatherResult");
    resultDiv.innerHTML = "Loading...";
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.error) {
        resultDiv.innerHTML = `<p style="color:red;">${data.error.message}</p>`;
        return;
      }
  
      const html = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
        <p><strong>Condition:</strong> ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="Weather Icon"/>
      `;
      resultDiv.innerHTML = html;
    } catch (error) {
      resultDiv.innerHTML = `<p style="color:red;">Failed to fetch weather data.</p>`;
      console.error(error);
    }
  }
  