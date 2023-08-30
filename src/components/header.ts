import booksData from '../../book-data.json';
const url = 'http://localhost:5173/';

const likedBooks = booksData.slice(3, 10);
console.log(likedBooks);

// it must show a number related to the liked books length

// position
// flex / grid
// float
// ::after

export const header = () => {
  return /*html*/ `
  <header>
    <img src="../../public/images/company-logo.png" alt="company logo" class="company-logo--small">
    <input type="text" placeholder="Search" id="inputField" onchange="(console.log(typeof parseInt(this.value)))">
    <ul class="icon-container">
      
      <li><a href=""><img src="../../public/images/user.png" alt="user page link" class="social_icon"></a></li>
      <li><img src="../../public/images/heart.png" alt="like this book" class="social_icon"><p>${
        likedBooks.length
      }</p></li>
      <li><a href=""><img src="../../public/images/shopping-cart.png" alt="shopping cart link" class="social_icon"></a></li>
    </ul>
    <nav>
      <ul>
        <li><a href=${`${url}`}>Home</a></li>
        <li><a href=${`${url}single-book`}>Single</a></li>
        <li><a href=${`${url}category-page`}>Category</a></li>
        <li><a href=${`${url}signup`}>Signup</a></li>
        <li><a href=${`${url}login`}>Login</a></li>
        <li><a href=${`${url}contact`}>Contact</a></li>
        <li><a href=${`${url}checkout`}>Checkout</a></li>
      </ul>
    </nav>
  </header>`;
};
