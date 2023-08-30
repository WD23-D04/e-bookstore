const url = "http://localhost:5173/"

export const header = () => {
  return `
  <header>
    <img src="../../public/images/company-logo.png" alt="company logo" class="company-logo--small">
    <input type="text" placeholder="Search" id="inputField" onchange="(console.log(typeof parseInt(this.value)))">
    <ul class="icon-container">
      <li><a href=""><img src="../../public/images/user.png" alt="user page link" class="social_icon"></a></li>
      <li><img src="../../public/images/heart.png" alt="like this book" class="social_icon"></li>
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
