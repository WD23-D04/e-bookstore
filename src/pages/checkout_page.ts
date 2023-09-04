import userData from '../../user-data.json';
import cartData from '../../cart-data.json';

const { fullName, email, address, phone } = userData;

const totalPrice = cartData.reduce((total, book) => book.price + total, 0);

export const checkoutPage = () => {
  return /*html*/ `

    <main>
        <ul class="ordered-products-list">
           ${cartData.map(
             (book) =>
               `<li>
                <h3>${book.title}</h3>
                <p>${book.price}</p>
                <a href="">see the product</a>
        </li>`
           )}
        </ul>
        <div class="checkout-page__buttons-container">
            <a href="">See more books!</a>
            <a href="">Proceed to checkout!</a>
        </div>
    </main>
    <aside>
        <p>TOTAL ${totalPrice}</p>
        <address>
            <p>${fullName}</p>
            <p>${email}</p>
            <p>${address.street}</p>
            <p>${address.suite}</p>
            <p>${address.city}</p>
            <p>${address.zipcode}</p>
            <p>${phone}</p>
        </address>
    </aside>
`;
};
