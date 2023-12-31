

export const loginPage = () => {
  return /*html*/ `
    <main class="login-page">
        <img src="https://images.unsplash.com/photo-1456953180671-730de08edaa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZSUyMGJvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="store image" class="login-page__img">
        <div class="login-page__content">
            <img src="../../public/images/company-logo.png" alt="company logo" class="login-page__logo">
            <p class="login-page__welcome">Welcome back!</p>
            <h1 class="login-page__title">Login to your account!</h1>
            <form action="" class="login-page__form">
                <label for="email">E-mail</label>
                <input type="email" placeholder="john@mail.com">
                <label for="password">Password</label>
                <input type="password" placeholder="********" name="password">

                <label for="checkbox"><input type="checkbox" name="checkbox">Remember Me</label>
            </form>
            <div class="button-container">
                <button class="button-cta">Login</button>
                <button class="button-secondary"><a href="http://localhost:5173/signup">Sign Up</a></button>
            </div>
        </div>
    </main>
    `;
};
