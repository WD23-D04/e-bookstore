import { IBook } from '../interfaces';

export const singleBookCard = (book: IBook) => {
  console.log(book);
  return /*html*/ `<li class="book-card__vertical">
          <h3>${book.title}</h3>
          <p>${book.author}</p>
          <p>${book.price}</p>
        </li>`;
};
