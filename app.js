const input = document.querySelector("#input");
const city = document.querySelector("#city");
const cityName = document.querySelector("#cityName");
const Temp = document.querySelector("#temp");
const Temp2 = document.querySelector("#temp2");
const Temp_min = document.querySelector("#temp_min");
const Temp_max = document.querySelector("#temp_max");
const Feels = document.querySelector("#feels");
const main = document.querySelector("#main");
const Wind_speed = document.querySelector("#Wind_speed")
const discription = document.querySelector("#discription");
const image = document.querySelector("#icon");

input.onsubmit = (e) => {
  e.preventDefault();
  weatherUpdate(city.value);
  city.value = "";
};

const weatherUpdate = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93968e99db703b490e20bb9d05c989df&units=metric`
  )
    .then((response) => {
      if (response.status === 404) {
        alert("Place not found");
      }
      return response.json();
    })
    .then((data) => {
      cityName.innerHTML = data.name;
      Temp.innerHTML = Math.round(data.main.temp);
      Temp2.innerHTML = Math.round(data.main.temp);
      Temp_min.innerHTML = Math.round(data.main.temp_min);
      Temp_max.innerHTML = Math.round(data.main.temp_max);
      Feels.innerHTML = Math.round(data.main.feels_like);
      main.innerHTML = Math.round(data.main.humidity);
      Wind_speed.innerHTML = data.wind.speed;
      discription.innerHTML = data.weather[0].description;
    //   icon.innerHTML=data.weather.icon;
      image.src =`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(error.message);
    });
};
