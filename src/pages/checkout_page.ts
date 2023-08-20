import { header } from '../components/header';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

   ${header}
    <main>
        <ul class="ordered-products-list">
            <li>
                <div>
                    <h3>Book Title</h3>
                    <p>20</p>
                    <a href="">see the product</a>
                </div>
            </li>
            <li>
                <div>
                    <h3>Book Title</h3>
                    <p>30</p>
                    <a href="">see the product</a>
                </div>
            </li>
            <li>
                <div>
                    <h3>Book Title</h3>
                    <p>30</p>
                    <p>2</p>
                    <a href="">see the product</a>
                </div>
            </li>
        </ul>
        <div class="checkout-page__buttons-container">
            <a href="">See more books!</a>
            <a href="">Proceed to checkout!</a>
        </div>
    </main>
    <aside>
        <p>TOTAL 80</p>
        <address>
            <p>Customer Name</p>
            <p>Main Street, 123</p>
            <p>01234, Main City</p>
            <a href="tel:0123 123 123 123"></a>
            <a href="mailto:user@mail.com">user@mail.com</a>
        </address>

    </aside>
`;
