const buyedBooks = [
  {
    id: '7fdf:3d1e:f845:14ef:9634:9030:e280:5ace/94',
    title: 'Miss March',
    author: 'Dani Tolliday',
    price: 82,
    category: 'Doors, Frames & Hardware',
  },
  {
    id: '3b24:2e94:5c8d:708c:df3:ae1c:ae61:a45/60',
    title: 'Battles Without Honor & Humanity (Jingi naki tatakai)',
    author: 'Bealle Lorie',
    price: 80,
    category: 'Electrical and Fire Alarm',
  },
  {
    id: '3b24:2e94:5c8d:708c:df3:ae1c:ae61:a45/60',
    title: 'Battles Without Honor & Humanity (Jingi naki tatakai)',
    author: 'Bealle Lorie',
    price: 20,
    category: 'Electrical and Fire Alarm',
  },
];

const totalPrice = buyedBooks.reduce((total, book) => book.price + total, 0);

export const checkoutPage = () => {
  return `

    <main>
        <ul class="ordered-products-list">
           ${buyedBooks.map(
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
            <p>Customer Name</p>
            <p>Main Street, 123</p>
            <p>01234, Main City</p>
            <a href="tel:0123 123 123 123"></a>
            <a href="mailto:user@mail.com">user@mail.com</a>
        </address>

    </aside>
`;
};
