import { header } from '../components/header';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

    ${header}
    <main class="single-book">
        <div class="page-main-navigation">
            <a href=""><img src="../../public/images/arrow.png" alt="go back icon" class="arrow-icon"></a>
            <h1 class="single-book__category-tag">Category Tag</h1>
        </div>
        <div class="book-info">
            <img src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="Book Title Image" class="book-info__cover">
            <h1 class="book-info__title">Book Title</h1>
            <img src="../../public/images/heart.png" alt="like icon" class="book-info__icon">
            <p class="book-info__author">Book Author</p>
            <h2 class="book-info__summary">Summary</h2>
            <p class="book-info__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea sequi
                facilis quas officia maxime
                maiores!
                Maxime fuga similique facere repudiandae aperiam illo ipsum laborum officia voluptatum qui quo
                consequatur,
                aut maiores magnam minima pariatur recusandae commodi, nesciunt quibusdam repellendus. Perferendis est
                perspiciatis deleniti modi fuga. Doloribus deserunt nobis mollitia ullam, quaerat ex porro, ut illum rem
                modi saepe accusantium voluptatum laboriosam perspiciatis, nulla unde fuga? Iusto doloribus eum adipisci
                soluta voluptate enim ipsam quis cum similique earum obcaecati, reiciendis itaque consectetur
                consequatur.
                Commodi quasi consectetur obcaecati quisquam nihil? Praesentium tempore quae sapiente eligendi
                doloremque
                quo temporibus, at natus ipsum consequuntur, quasi omnis nostrum delectus veritatis mollitia accusantium
                nobis aliquid rem! Necessitatibus nobis molestiae minima deserunt accusamus quam exercitationem
                provident
                quas officia voluptatibus unde dolore, laudantium architecto eos odit iusto est dolorum eum corporis
                saepe
                quos nesciunt adipisci ea ipsa? Ratione facilis eligendi quia quos, culpa nostrum numquam porro
                molestias
                enim atque dolores laudantium qui perferendis dicta exercitationem aut ut eveniet assumenda! Porro cum
                sint
                officia aliquam maiores deserunt dolore odit inventore consectetur tenetur esse voluptatibus deleniti
                ullam,
                nemo ex rem vitae sapiente laudantium ipsam repellat, necessitatibus id! Possimus nemo, at iste
                exercitationem veniam aspernatur vero laborum. Exercitationem nemo velit, voluptas ratione possimus
                cupiditate cum nostrum culpa voluptatum sint aut ab. Quisquam molestias ab cumque, atque sint commodi
                dolorem laborum labore officia eos vero nisi ducimus sit, aut aliquid blanditiis suscipit iste velit
                quae
                officiis animi necessitatibus? Adipisci et quo, recusandae doloribus ullam odit nam aperiam, nemo at
                pariatur culpa temporibus doloremque illo! Sint doloremque eos dolorem repudiandae reiciendis, optio
                ipsum
                molestiae sapiente. Eius obcaecati necessitatibus ullam cupiditate temporibus eum ab voluptate explicabo
                adipisci maiores at tempora nulla in repellat quisquam, magni delectus ex. Ut commodi ipsam sapiente
                corrupti minima animi libero enim. Voluptatem excepturi iste sunt ea, pariatur minima!</p>
        </div>
        <button class="button-cta--2text"><div>30$ </div><div>buy now</div></button>
    </main>`;
