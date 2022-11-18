window.addEventListener('load',()=>{
let long;
let lat;
let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezone = document.querySelector(".location-timezone");
let temperatureSection = document.querySelector('.temperature');
const temperatureSpan = document.querySelector('.temperature span');


if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(position=>{
long =position.coords.longitude;
lat= position.coords.latitude;
let tagle = "C";


// const proxy=" ";
// const api=`${proxy}https://api.weatherapi.com/v1/current.json?key=51c31e0858a143479c6184539221611&q=${lat},${long}`;
const api= `https://api.weatherapi.com/v1/current.json?key=51c31e0858a143479c6184539221611&q=${lat},${long}`
fetch(api)
.then(response=>{
    return response.json();
})
.then(data =>{
    // const {temperature,summary} = data.currently;
    const { temp_c, temp_f } = data.current;
      const { text, icon } = data.current.condition;
      const { tz_id } = data.location;
    // ---set DOM Element from the API---
    temperatureDegree.textContent = temp_c;
    temperatureDescription.textContent = text;
    locationTimezone.textContent = tz_id;
   
    temperatureSection.addEventListener("click", () => {
    if (tagle === "C") {
      temperatureDegree.textContent = temp_c;
      temperatureSpan.textContent = "C";
      tagle = "F";
    } else if (tagle === "F") {
      temperatureDegree.textContent = temp_f;
      temperatureSpan.textContent = "F";
      tagle = "C";
    }
  });


});
});

 }


});


