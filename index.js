const result = document.querySelector('result')
const form= document.querySelector('.get-weather')
const nameCity = document.querySelector('#city')
const nameCountry = document.querySelector('#country')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameCity.vale === '' || nameCountry.vale === ''){
        showError('Ambos campos son de afuerza papi..!!');
    }

    console.log(nameCity.vale)
    console.log(nameCountry.vale)
})

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
