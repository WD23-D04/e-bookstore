import bookData from '../../book-data.json' ;
import { formatWord } from '../tools';

const book = bookData[0]

console.log(formatWord(book))

export const homePage = () => {
  return `

    <main>
        <section class="hero">
            
        </section>
        <section class="home-page__book-list">
            
        </section>
    </main>
`;
};
