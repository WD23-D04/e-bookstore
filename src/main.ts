import './styles/main.scss';
import { formatWord } from './utilities/formatWord';
import { sume } from './utilities/sume';
import { header } from './components/header';

const rawBook1 = 'the lord of the rings';
const rawBook2 = 'LoveCraft TaLeS';
const rawBook3 = 'i robot';
const rawBook4 = '       luther         ';

/* const book1 = rawBook1.slice(0, 1).toUpperCase(); */

const book1 = formatWord(rawBook1);

const book2 = formatWord(rawBook2);
/* rawBook2.trim().slice(0, 1).toUpperCase() +
  rawBook2.trim().slice(1).toLowerCase(); */

const book3 = rawBook3.trim().toUpperCase();

const book4 = formatWord(rawBook4);

const searchTerm = 'the lord of the rings';

const isBook1 = book1.includes(searchTerm);

console.log(isBook1);

const banane = 8;
const melone = 9;

const result = sume(banane, melone);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  ${header}
  
<main class="category-page">
<h1>${result}</h1>
  <div class="page-main-navigation">
      <a href=""><img src="../../public/images/arrow.png" alt="go back icon" class="arrow-icon"></a>
      <h1 class="category-page__title">Category Tag</h1>
  </div>
  <ul class="book-card-container">

      <li>
          <div class="book-card--vertical">
              <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="book cover" class="book-card__img">
              <h3 class="book-card__title">${book1}</h3>
              <p class="book-card__author">Book Author</p>
              <p class="book-card__price">30</p>
          </div>
      </li>
      <li>
          <div class="book-card--vertical">
              <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="book cover" class="book-card__img">
              <h3 class="book-card__title">${book2}</h3>
              <p class="book-card__author">Book Author</p>
              <p class="book-card__price">30</p>
          </div>
      </li>
      <li>
          <div class="book-card--vertical">
              <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="book cover" class="book-card__img">
              <h3 class="book-card__title">${book3}</h3>
              <p class="book-card__author">Book Author</p>
              <p class="book-card__price">30</p>
          </div>
      </li>
      <li>
          <div class="book-card--vertical">
              <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="book cover" class="book-card__img">
              <h3 class="book-card__title">${book4}</h3>
              <p class="book-card__author">Book Author</p>
              <p class="book-card__price">30</p>
          </div>
      </li>
        </ul>
</main>
  </div>
`;

/* 
asdasda

asdfasdf */
