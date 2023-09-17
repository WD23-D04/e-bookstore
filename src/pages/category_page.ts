import booksData from '../data/books-data.json';
import { bookCardContainer } from '../components/bookCardContainer';
import {
  capitalizeFirst,
  capitalizeFirstLetterEveryWord,
  getFilteredBooks,
} from '../utilities/tools';

const categoryUrl = window.location.pathname.split('/').at(-1);

/* const filteredBooks = booksData.filter(book => book.author === "" ) */
const filteredBooks = getFilteredBooks(booksData, categoryUrl);

export const categoryPage = () => {
  return /*html*/ `
  <div>
  
<main class="category-page">
  <div class="page-main-navigation">
    <a href="" class="page-main-navigation__icon"><img src="../../public/images/arrow.png" alt="go back icon" class="arrow-icon"></a>
    <h1 class="page-main-navigation__title">${capitalizeFirst(categoryUrl)}</h1>
    <form action="">
    <input type="text" placeholder="Search" id="inputField" class="page-main-navigation__input">;
  </form>
  </div>
  <ul class="book-card-container">
    ${filteredBooks
      .map(
        (book) => /*html*/ `<li>
            <div class="book-card--vertical">
                <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt="book cover" class="book-card__img">
                <h3 class="book-card__title">${capitalizeFirst(book.title)}</h3>
                <p class="book-card__author">${capitalizeFirstLetterEveryWord(
                  book.author
                )}</p>
                <p class="book-card__price">${book.price}</p>
            </div>
        </li>`
      )
      .join('')}
        </ul>
</main>
  </div>
`;
};
