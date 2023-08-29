import bookData from '../../book-data.json';

const selectedBooks = bookData.slice(0, 4);
export const categoryPage = () => {
  return `
  <div>
  
<main class="category-page">
  <div class="page-main-navigation">
      <a href=""><img src="../../public/images/arrow.png" alt="go back icon" class="arrow-icon"></a>
      <h1 class="category-page__title">Category Tag</h1>
  </div>
  <ul class="book-card-container">
    ${selectedBooks.map(
      (book) =>
        `<li>
            <div class="book-card--vertical">
                <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt="book cover" class="book-card__img">
                <h3 class="book-card__title">${book.title}</h3>
                <p class="book-card__author">${book.author}</p>
                <p class="book-card__price">${book.price} E</p>
            </div>
        </li>`
    )}
     
        </ul>
</main>
  </div>
`;
};
