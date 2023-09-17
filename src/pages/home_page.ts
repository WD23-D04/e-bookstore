import {
  filterBooksPerPrice,
  searchFilterBooks,
  bookCardContainer,
} from '../utilities/tools';

import { IBook } from '../interfaces';

import { singleBookCard } from '../components/singleBookCard';
import booksData from '../data/books-data.json';
const singleBookData: IBook = booksData[0];

/* const filteredBooks = searchFilterBooks(booksData, 'Vince Pankethman'); */
/* ${bookCardContainer(filteredBooks)} */

const filteredBooks = filterBooksPerPrice(booksData, 30);

console.log({ singleBookData });

export const homePage = () => {
  return /*html*/ `

    <main class="home-page">
      
        <section class="hero">
        </section>
        <section class="home-page__book-list">
        ${bookCardContainer(filteredBooks).slice(0, 10)}    
        </section>
    </main>
`;
};
