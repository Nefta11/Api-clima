const result = document.querySelector('.result'); // Corrige el selector para que apunte a la clase correcta
const form = document.querySelector('.get-weather');
const nameCity = document.querySelector('#city');
const nameCountry = document.querySelector('#country');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameCity.value === '' || nameCountry.value === ''){ 
        showError('Ambos campos son obligatorios.');
    }
     callAPI(nameCity.value, nameCountry.value);
   // console.log(nameCity.value); 
    //console.log(nameCountry.value); 
});

function callAPI(city,country){
    const apiId =  '82ab5004f81d26a35fa4e53e117e0038'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;

    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(dataJSON =>{
            if (dataJSON.cod == '404'){
                showError('Ciudad no encontrada...')
            }else{
                showWeather(dataJSON)
            }
           // console.log(dataJSON)
        })
}

function showWeather(data){
    const {name, main: {temp, temp_min, temp_max}, weather: [arr]} = data; // Corrige 'weaher' a 'weather'

    const degrees = kelvintoCentigrade(temp);
    const min = kelvintoCentigrade(temp_min);
    const max = kelvintoCentigrade(temp_max);

    const content = document.createElement('div');
    content.innerHTML = `
        <h5>Clima en ${name}</h5>
        <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="">
        <h2>${degrees}°C</h2>
        <p>Max: ${max}°C</p>
        <p>Min: ${min}°C</p>
    `;

    result.appendChild(content);
}
 


function showError(message){
    console.log(message);
    const alert = document.createElement('p');
    alert.classList.add('alert-message');
    alert.innerHTML = message;

    form.appendChild(alert);
    setTimeout(()=>{
        alert.remove();
    }, 3000);
}

function kelvintoCentigrade(temp){
return parseInt(temp - 273.15);
}
