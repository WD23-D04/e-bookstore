import booksData from '../data/books-data.json';
import { bookCardContainer } from '../components/bookCardContainer';
import { capitalizeFirst, getFilteredBooks } from '../utilities/tools';

const categoryUrl = window.location.pathname.split('/').at(-1);

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
    ${bookCardContainer(filteredBooks)}
        </ul>
</main>
  </div>
`;
};
