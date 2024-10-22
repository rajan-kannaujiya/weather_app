// window.alert("Hello Js");
// 0fde24f18909b27ce870124bbcdf96d5
// https://api.openweathermap.org/data/2.5/weather?units=metric&q=Lucknow&appid=0fde24f18909b27ce870124bbcdf96d5

async function weather(){
    let city=document.querySelector('#search>input').value;
    console.log(city);
    const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="+city+"&appid=0fde24f18909b27ce870124bbcdf96d5";
    console.log(url);
    const res=await fetch(url);
    const data = await res.json();
    console.log(data)
    temp.innerHTML=Math.round(data.main.temp)+"℃";
    cityname.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity+"%";
    wind.innerHTML=data.wind.speed+"km/h";
    console.log(data.weather[0].main);
    if(data.weather[0].main=="Mist"){
        document.querySelector('#main>img').src="mist.png";
    }
    else if(data.weather[0].main=="Clear"){
        document.querySelector('#main>img').src="clear.png";
    }
}

