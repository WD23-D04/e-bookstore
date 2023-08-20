export const header = () => {
  

  return `<header>
<img src="../../public/images/company-logo.png" alt="company logo" class="company-logo--small">
<input type="text" placeholder="Search" id="inputField" onchange="(console.log(typeof parseInt(this.value)))">
<div class="icon-container">
    <a href=""><img src="../../public/images/user.png" alt="user page link" class="social_icon"></a>
    <img src="../../public/images/heart.png" alt="like this book" class="social_icon">
    <a href=""><img src="../../public/images/shopping-cart.png" alt="shopping cart link"
            class="social_icon"></a>
</div>
</header>`;
};
