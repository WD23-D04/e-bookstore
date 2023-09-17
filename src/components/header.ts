import booksData from '../data/books-data.json';
import userData from '../data/user-data.json';
const url = 'http://localhost:5173/';

const likedBooks = userData.likedBooks;

const uniqueCategories = [
  ...new Set(
    ([] as string[])
      .concat(...booksData.map((book) => book.categories.split('|')))
      .sort()
  ),
];

window.addEventListener('load', () => {
  uniqueCategories.forEach((category) => {
    const select = document.querySelector('select');
    const option = document.createElement('option');
    option.innerText = category;
    option.value = category;
    option.addEventListener('click', () => {
      window.location.href = `${url}category-page/${option.value.toLowerCase()}`;
    });
    select?.appendChild(option);
  });
});

export const header = () => {
  return /*html*/ `
  <header>
  <a href=${`${url}`}><img src="../../public/images/company-logo.png" alt="company logo" class="company-logo--small"></a>
    
    
    <ul class="icon-container">
      
      <li><a href=${`${url}${
        Object.entries(userData).length <= 0 ? 'login' : 'user'
      }`}><img src=${
    userData.picture || '../../public/images/user.png'
  } alt="user page link" class="social_icon"></a></li>
      <li class="liked-books-container" value = ${
        likedBooks.length
      }><a href="liked-books"><img src="../../public/images/heart.png" alt="like this book" class="social_icon liked-books-icon"></a>
      </li>
      <li><a href=${`${url}checkout`}><img src="../../public/images/shopping-cart.png" alt="shopping cart link" class="social_icon"></a></li>
      <li><a href=${`${url}contact`}><img src="../../public/images/mail.png" alt="mail link" class="social_icon"></a></li>
    </ul>
    <nav>
      <select>
      </select>
    </nav>
  </header>`;
};
