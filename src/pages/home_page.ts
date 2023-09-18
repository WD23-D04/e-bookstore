import { bookCardContainer } from '../components/bookCardContainer';
import { findLowestPrice, sortPerAscendingPrice } from '../utilities/tools';
import booksData from '../data/books-data.json';

const filteredBooks = booksData.slice(3, 10);

let user1ShoppingCart = [...filteredBooks];

/* const cheapestBook = findLowestPrice(booksData); */
const sortedBooks = sortPerAscendingPrice(booksData);

export const homePage = () => {
  return /*html*/ `

    <main class="home-page">
      
        <section class="hero">
        </section>
        <section class="home-page__book-list">
        ${bookCardContainer(filteredBooks)}    
        </section>
    </main>
`;
};
