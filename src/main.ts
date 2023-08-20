import './styles/main.scss';
import { header } from './components/header';

const user = {
  status: 'success',
  message: 'User successfully authenticated.',
  id: '123456',
  userName: 'Michael',
  email: 'user@example.com',
  roles: ['user', 'authenticated'],
  picture:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImV4YW1wbGVfdXNlciIsImlhdCI6MTYzMTQwNDQzMiwiZXhwIjoxNjMxNDExMjMyfQ.FAKE_TOKEN_SIGNATURE',
};

const userName = user.userName || 'Friedrich';

const message = userName
  ? `Hello There ${userName}`
  : `Hello There, please write your name`;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `
  <div>
  ${header()}
  <img src="https://images.unsplash.com/photo-1456953180671-730de08edaa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZSUyMGJvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  alt="store image" class="login-page__img">
<div class="login-page__content">
<img src="../../public/images/company-logo.png" alt="company logo" class="login-page__logo">
   <h1 class="${
     userName && 'heute_ist_dienstag' && 'login-page__title'
   }" >${message}</h1>
   <h1>${userName || 'Sylvie'}</h1>
 <form action="" class="login-page__form">
      <label for="email">E-mail</label>
      <input type="email" placeholder="john@mail.com">
      <label for="password">Password</label>
      <input type="password" placeholder="********" name="password">

      <label for="checkbox"><input type="checkbox" name="checkbox">Remember Me</label>
  </form>
  <div class="button-container">
      <button class="button-cta">Login</button>
      <button class="button-secondary"><a href="">Register</a></button>
  </div>
</div>
  </div>
`;

/* 
asdasda

asdfasdf */
