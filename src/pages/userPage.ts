import userData from '../data/user-data.json';
import booksData from '../data/books-data.json';

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
      ${likedBooks.map((bookId) => {
        const book = booksData.find((book) => book.id === bookId);
        return /*html*/ `
        <div>
          <h3>${book?.title}</h3>
          <p>${book?.author}</p>
          <p>${book?.price}</p>
      </div>
        `;
      }).join("")}
      </section>
    </div>`;
};
