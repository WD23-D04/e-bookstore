import { IBook } from '../interfaces';

export const singleBookCard = (book: IBook) => {
  return /*html*/ `<li class="book-card" value=${book.id}>
          <h3 class="book-card__title">${book.title}</h3>
          <img src=${book.image} alt="" class="book-card__img">
          <p class="book-card__author">${book.author}</p>
          <p class="book-card__price">${book.price}</p>
        </li>`;
};
