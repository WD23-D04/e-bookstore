import booksData from '../data/books-data.json';
import {
  capitalizeFirst,
  capitalizeFirstLetterEveryWord,
} from '../utilities/tools';

const singleBookData = booksData[0];
export const singleBook = () => {
  return /* html */ `

    <main class="single-book">
        <div class="page-main-navigation">
            <a href=""><img src="../../public/images/arrow.png" alt="go back icon" class="arrow-icon"></a>
            <h1 class="single-book__category-tag">Category Tag</h1>
        </div>
        <div class="book-info">
            <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="Book Title Image" class="book-info__cover">
            <h1 class="book-info__title">${capitalizeFirst(
              singleBookData.title
            )}</h1>
            <img src="../../public/images/heart.png" alt="like icon" class="book-info__icon">
            <p class="book-info__author">${capitalizeFirstLetterEveryWord(
              singleBookData.author
            )}</p>
        </div>
        <button class="button-cta--2text"><div>${
          singleBookData.price
        }$ </div><div>buy now</div></button>
    </main>`;
};
