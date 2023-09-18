import { bookCardContainer } from '../components/bookCardContainer';
import booksData from '../data/books-data.json';

const filteredBooks = booksData.slice(3, 10);

export const homePage = () => {
  return /*html*/ `

    <main class="home-page">
      
        <section class="hero">
        </section>
        <section class="home-page__book-list">
        ${bookCardContainer(filteredBooks).slice(0, 10)}    
        </section>
    </main>
`;
};
