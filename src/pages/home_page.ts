import {
  filterBooksPerPrice,
  searchFilterBooks,
  bookCardContainer,
} from '../utilities/tools';

import booksData from '../data/books-data.json';

/* const filteredBooks = searchFilterBooks(booksData, 'Vince Pankethman'); */

const filteredBooks = filterBooksPerPrice(booksData, 30);

console.log(filteredBooks);

export const homePage = () => {
  return /*html*/ `

    <main>
        <section class="hero">
        </section>
        <section class="home-page__book-list">
          <ul>
        ${bookCardContainer(filteredBooks)}
        </ul>
        </section>
    </main>
`;
};
