import userData from '../data/user-data.json';

const { fullName, userName, phone, email, address, website, picture } =
  userData;

const { street, suite, city, zipcode } = address;

export const userPage = () => {
  return /*html*/ `
    <div class="user-page">
      <h1>${fullName}</h1>
      <p>${userName}</p>
      <p>${email}</p>
      <p>${street} ${suite}, ${zipcode}, ${city}</p>
      <p>${phone}</p>
      <p>${website}</p>
      <img src=${picture}/>
    </div>`;
};
