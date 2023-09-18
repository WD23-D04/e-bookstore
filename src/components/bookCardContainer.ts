import { IBook } from '../interfaces';
import { singleBookCard } from './singleBookCard';
export const bookCardContainer = (books: IBook[]) => {
  return /*html*/ `
    <ul class="book-card-container">
    ${books.map((book) => singleBookCard(book))}
    </ul>
    `;
};
