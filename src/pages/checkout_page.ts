import userData from '../data/user-data.json';
import cartData from '../data/cart-data.json';
import {
  capitalizeFirst,
  capitalizeFirstLetterEveryWord,
} from '../utilities/tools';

import { bookCardContainer } from '../components/bookCardContainer';

const { fullName, email, address, phone } = userData;

const totalPrice = cartData.reduce((total, book) => book.price + total, 0);

export const checkoutPage = () => {
  return /*html*/ `

    <main class="checkout-page">
        ${bookCardContainer(cartData)}
        <p class="checkout-page__total">TOTAL ${totalPrice}</p>
        <button class="button-buy">Proceed To Pay</button>
        <address>
          <p>${fullName}</p>
          <p>${email}</p>
          <p>${address.street}</p>
          <p>${address.suite}</p>
          <p>${address.city}</p>
          <p>${address.zipcode}</p>
          <p>${phone}</p>
        </address>
      </main>
`;
};
