/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const prediction1 = 'Сегодня вечером посвяти время на любовь к себе';
const prediction2 = 'Ты на правильном пути, продолжай в том же духе';
const prediction3 = 'Скоро ты получишь приятную новость';
const prediction4 = 'Доверяй своей интуиции';
const prediction5 = 'Не бойся трудностей, они делают тебя сильнее';

const forecastButton = document.querySelector('.forecast-btn');
const currentForecastTitle = document.querySelector('.current-forecast h1');
const currentForecastText = document.querySelector('.current-forecast p');
const forecastsContainer = document.querySelector('.forecasts');
const forecastTemplate = document.getElementById('forecast-item'); 

function generatePrediction() {
    const randomNum = Math.floor(Math.random() * 5) + 1;
    
    let prediction;
    switch (randomNum) {
        case 1:
            prediction = prediction1;
            break;
        case 2:
            prediction = prediction2;
            break;
        case 3:
            prediction = prediction3;
            break;
        case 4:
            prediction = prediction4;
            break;
        case 5:
            prediction = prediction5;
            break;                   
    }

    const probability = Math.floor(Math.random() * 101);

    currentForecastTitle.textContent = prediction;
    currentForecastText.textContent = `Вероятность: ${probability}%`;

    const newForecastItem = forecastTemplate.content.cloneNode(true);  

    newForecastItem.querySelector('h3').textContent = prediction;

    newForecastItem.querySelector('p').textContent = `Вероятность: ${probability}%`;
    
    forecastsContainer.prepend(newForecastItem);
}

    forecastButton.addEventListener('click', generatePrediction);
