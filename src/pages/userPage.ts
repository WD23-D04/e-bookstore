import userData from '../data/user-data.json';
import booksData from '../data/books-data.json';
import {
  capitalizeFirst,
  capitalizeFirstLetterEveryWord,
} from '../utilities/tools/';
const {
  fullName,
  userName,
  phone,
  email,
  address,
  website,
  picture,
  likedBooks,
} = userData;

export const userPage = () => {
  return /*html*/ `
    <div>
      <h1>${fullName}</h1>
      <p>${userName}</p>
      <p>${email}</p>
      <p>${address}</p>
      <p>${phone}</p>
      <p>${website}</p>
      <img src=${picture}/>
      <section>
        <h2>Liked Books</h2>
      ${likedBooks
        .map((bookId) => {
          const book = booksData.find((book) => book.id === bookId);
          return /*html*/ `
        <div>
          <h3>${capitalizeFirst(book?.title)}</h3>
          <p>${capitalizeFirstLetterEveryWord(book?.author)}</p>
          <p>${book?.price}</p>
      </div>
        `;
        })
        .join('')}
      </section>
    </div>`;
};
