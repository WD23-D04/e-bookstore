import { IBook } from '../interfaces';

export const bookCard = (books: IBook[]) => {
  return books.map(
    (book) =>
      `<li>
          <h3>${book.title}</h3>
          <p>${book.author}</p>
          <p>${book.price}</p>
          <p>${book.category}</p>
        </li>`
  );
};


/* export const getBooks = (books: IBook[]) => {
  let bookHtml = '';
  bookHtml += '<ul>';
  for (let i = 0; i < books.length; i++) {
    bookHtml += `<li>
        <h3>${books[i].title}</h3>
        <p>${books[i].author}</p>
        <p>${books[i].price}</p>
        <p>${books[i].category}</p>
    </li>`;
  }
  bookHtml += '</ul>';
  return bookHtml;
}; */
