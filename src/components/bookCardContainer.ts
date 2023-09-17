import { IBook } from '../interfaces';
import { singleBookCard } from './singleBookCard';
export const bookCardContainer = (books: IBook[]) => {
  return /*html*/ `
    <ul>
    ${books.map((book) => singleBookCard(book))}
    </ul>
    `;
};
