import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

/*Вынеси её в отдельный файл fetchCountries.js и сделай именованный экспорт.
 */
import { fetchCountries } from './fetchCountries';

// Достаём елементы
const refs = {
    inputForm: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
};

const DEBOUNCE_DELAY = 300;
// Применить приём Debounce
refs.inputForm.addEventListener('input',
    debounce(onInputChenge, DEBOUNCE_DELAY));

    // Cанитизация введенной строки методом trim()
function onInputChenge() {
    const name = refs.inputForm.value.trim();
    if (name === '') {
        return ((refs.countryList.innerHTML = ''),
        (refs.countryInfo.innerHTML = ''));
    }
    // Связываем логику с функционалом
    fetchCountries(name)
        .then(response => { 
            refs.countryList.innerHTML = '';
            refs.countryInfo.innerHTML = '';
            // Интерфейс с помощъю библиотеки Notiflix
            if (response.length < 10) {
                Notiflix.Notify.info(
                    'Too many matches found. Please enter a more specific name.'
                );
            } else if (response.length < 10 && response.length >= 2) {
                
            }
        });

    }