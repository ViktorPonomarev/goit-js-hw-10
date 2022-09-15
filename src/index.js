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