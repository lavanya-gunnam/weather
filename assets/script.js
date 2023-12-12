let inputEle = document.getElementById("location-input");
let temperature = document.getElementById("temp-value");
let locEle = document.getElementById("location");
let weatherdescEle = document.getElementById("weather-desc");
let humidityEle=document.getElementById("humidity")
let btnEle = document.getElementById("btn") ;
 const apikey = "d430cc2e84177895235da5e25887e7b6";

 btnEle.onclick = function(){

    if (inputEle.value === "")
    alert("please Enter Valid Location");
else{
    loc = inputEle.value
    url= `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${ apikey}`;
    fetch(url).then(res=> res.json())
    .then(data =>{
        console.log(data);
        const{name}= data;
        const{feels_like}=data.main;
        const{description}=data.weather[0];
        const{humidity}=data.main;
        temperature.innerText = Math.floor(feels_like-273);
        locEle.innerText = name;
        weatherdescEle.innerText= description;
    })
    .catch(() =>{
        alert("Enter Valid Location");
    })
    inputEle.value =""
    
    }
}
