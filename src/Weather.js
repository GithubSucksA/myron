import { useState } from "react";

function ShowWeather() {
    const [celcius, setCelcius] = useState(0);
    const [city, setCity] = useState('');
    //const [omstandigheden, setOmstandigheden] = useState('');

    const boder = {
        method: "GET"
    }
    const adder = (e) => {
        setCity(document.querySelector('.city').value);
    }

    const search = () => {
        setCity(document.querySelector('.city').value);
        let api = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=e169fee9f4e25af4552c3c2f7074e854';
        fetch(api, boder).then((response) => {
            response.json().then(data => {
                if (data.main === undefined) {
                    alert('that city doesn/t exist!')
                    return
                }
                let kelvin = data.main.temp;
                setCelcius((parseInt(kelvin - 273.15)));
                //setOmstandigheden(data.weather[0].main);
                //let windSpeed = data.wind.speed;
            });
        });
    }

    return (
        <div>
            <input onChange={adder} placeholder="sittard" class="city" type="text"/>
            <button onClick={search}>send</button>
            <p>The temperature in {city} is: {celcius}</p>
        </div>
    );
}

export default ShowWeather;