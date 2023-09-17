import booksData from '../data/books-data.json';

import { singleBookCard } from '../components/singleBookCard';

const likedBooksData = booksData.slice(20, 24);

export const likedBooks = () => {
  return /*html*/ `
        <section>
        <h1>Liked Books</h1>
      ${likedBooksData
        .map((book) => {
          booksData.find((_book) => _book.id === book.id);
          return /*html*/ `
        ${singleBookCard(book)}
        `;
        })
        .join('')}
      </section>
    
    `;
};
