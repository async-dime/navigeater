import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import * as dataJson from '../DATA.json';

//Restaurant fetch
let datas = dataJson.restaurants;
let dataItems = '';
datas.forEach(function (data) {
  dataItems += `
    <div class="list_item">
        <img class="list_item_thumb" src="${data.pictureId}" alt="${
    data.name
  }" title="${data.name}">
        <div class="city">${data.city}</div>
        <div class="list_item_content">
          <div class="list_item_title">
            <h1 class="list_item_title_text"><a class="button-size-min" href="#">${
              data.name
            }</a></h1>
            <div class="rating">
              <p class="list_item_rating_value">
                <a href="#" class="button-size-min ${
                  data.rating >= 1.0
                    ? data.rating >= 2.5
                      ? data.rating >= 4.0
                        ? data.rating >= 4.5
                          ? 'list_item_rating_value_very-high'
                          : 'list_item_rating_value_high'
                        : 'list_item_rating_value_average'
                      : 'list_item_rating_value_low'
                    : 'list_item_rating_value_very-low'
                }">${data.rating}</a>
              </p>
              <div class="item_rating">
                <div class="empty-rating"></div>
                <div class="full-rating" style="width:${
                  (data.rating / 5) * 100
                }%"></div>
              </div>
            </div>
          </div>
            <div class="list_item_desc">${data.description}</div>
        </div>
    </div>
    `;
});
document.querySelector('#restaurants').innerHTML = dataItems;

// Menu
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

// 🔨 Gunakan arrow-function
menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});
