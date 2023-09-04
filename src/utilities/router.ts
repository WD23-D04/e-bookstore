import { categoryPage } from '../pages/category_page';
import { singleBook } from '../pages/single_book';
import { signupPage } from '../pages/signup_page';
import { loginPage } from '../pages/login_page';
import { homePage } from '../pages/home_page';
import { checkoutPage } from '../pages/checkout_page';
import { contact_page } from '../pages/contact';
import { userPage } from '../pages/userPage';
import { _404 } from '../pages/_404';
import userData from '../../user-data.json';


const getPageIdCode = () => window.location.pathname.slice(1);

const pageIdCode = getPageIdCode();

export const getCurrentPage = () => {
  switch (pageIdCode) {
    case '':
      return homePage();
    case 'single-book':
      return singleBook();
    case 'category-page/:id':
      return categoryPage();
    case 'signup':
      return signupPage();
    case 'login':
      return loginPage();
    case 'checkout':
      return checkoutPage();
    case 'contact':
      return contact_page();
    case 'user':
      return userPage();
    default:
      return _404();
  }
};
