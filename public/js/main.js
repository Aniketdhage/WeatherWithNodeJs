const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer');
const temp_status = document.getElementById('temp_status');


const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=4d90100f52b8f92af4b1183b1864558e`

    if(cityVal === ""){
        city_name.innerText = `Plz write city name and then search`;
        datahide.classList.add('data_hide');
    } else {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4d90100f52b8f92af4b1183b1864558e`
        const response = await fetch (url);
        const data = await response.json();
        const arrData = [data];
        temp_real_val.innerText = arrData[0].main.temp;
        const tempMood = arrData[0].weather[0].main;
        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            if (tempMood == "clear") {
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color : #eccc68;'></>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML = 
                "<i class='fas fa-Cloud' style='color : #f1f2f6;'></>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML = 
                "<i class='fas fa-cloud-rain' style='color : #a4b0be;'></>";
            } else {
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color : ##eccc68;'></>";
        }
        datahide.classList.remove('data_hide');
    } catch {
            city_name.innerText = `please enter correct city name`;
            datahide.classList.add('data_hide');
        }
        
    }

}

submitBtn.addEventListener('click', getInfo)




// https://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=4d90100f52b8f92af4b1183b1864558e