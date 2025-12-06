/*
создание виджета ->
отображение формы погоды (ширина, долгота).
после отправки формы запрос на сервер
получаем запрос, отображаем данные
с leafleth или другой библ. для карт отображаем карту
*/

let codeWeather = {};

async function loadWeatherCodes() {
    try {
        const response = await fetch('./vmo.json');
        if (!response.ok) {
            throw new Error('Ошибка загрузки файла');
        }
        codeWeather = await response.json();
        console.log('JSON загружен:', codeWeather);
    } catch (error) {
        console.error('Ошибка загрузки JSON:', error);
    }
}

window.addEventListener('DOMContentLoaded', loadWeatherCodes);

const form = document.querySelector('.location-form');
const answerBlock = document.querySelector('.answer');
const body = document.querySelector('body');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const latitude = formData.get('Latitude');
    const longitude = formData.get('Longitude');
    try {
        if (!(/^-?(0|[1-9]\d*)(\.\d+)?$/.test(latitude) && /^-?(0|[1-9]\d*)(\.\d+)?$/.test(longitude)))
            throw new Error("Введите валидные данные")
        if (latitude < -90 || latitude > 90)
            throw new Error("Широта должна быть от -90 до 90");
        if (longitude < -180 || longitude > 180)
            throw new Error("Долгота должна быть от -180 до 180");
        }   
    catch (e) {
        answerBlock.textContent = e;
        answerBlock.style.color = 'red';
    }

    console.log(latitude,longitude)
    const testApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,weather_code`;

    try {
        const response = await fetch(testApiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }   
        });

        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)
        let a = codeWeather[data.current.weather_code].day
        let b = codeWeather[data.current.weather_code].icon_day
        answerBlock.innerHTML = `
        <p>Температура: ${data.current.temperature_2m} ${data.current_units.temperature_2m} 🌡️</p>
        <p>Ветер: ${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}</p>
        <p>Время: ${data.current.time.slice(11)}</p>
        <p>${a} ${b}</p>
        `;
        answerBlock.style.color = 'white';
        form.style.color = 'white';
        body.style.background = `
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(img/${codeWeather[data.current.weather_code].img}.jpg) center/cover no-repeat fixed
        `;

    } catch (error) {
        console.error('Произошла ошибка:', error);
        answerBlock.textContent = 'Не удалось получить погоду';
        answerBlock.style.color = 'red';
    }
});