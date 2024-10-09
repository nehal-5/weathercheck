document.getElementById("getWeatherBtn").addEventListener("click",getWeather);

function getWeather() {
    const cityInput = document.getElementById("cityInput").value;
    const apiKey = "f11803dd50e6b4921c298e40907c70de";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(url).then(response =>{
        if(!response.ok){
            throw new Error("City not found");
        }
        return response.json();
    })
    .then(data => {
        const weatherResult = `<h2>${data.name}</h2>
                               <p>Temperature: ${data.main.temp} celsius</p>
                               <p>Weather: ${data.weather[0].description}</p>`;
        document.getElementById("weatherResult").innerHTML = weatherResult;
    })
    .catch(error => {
        document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
    });
}