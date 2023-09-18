import booksData from '../data/books-data.json';
import { bookCardContainer } from '../components/bookCardContainer';

const likedBooksData = booksData.slice(20, 24);

export const likedBooks = () => {
  return /*html*/ `
        <section class="liked-books">
        <h1>Liked Books</h1>
        ${bookCardContainer(likedBooksData)}
      </section>
    
    `;
};
