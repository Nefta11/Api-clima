const result = document.querySelector('.result'); // Corrige el selector para que apunte a la clase correcta
const form = document.querySelector('.get-weather');
const nameCity = document.querySelector('#city');
const nameCountry = document.querySelector('#country');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameCity.value === '' || nameCountry.value === ''){ 
        showError('Ambos campos son obligatorios.');
    }

    console.log(nameCity.value); 
    console.log(nameCountry.value); 
});

function callAPI(city,country){
    const apiId =  ' 82ab5004f81d26a35fa4e53e117e0038'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;

    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(dataJSON =>{
            console.log(dataJSON)
        })
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
