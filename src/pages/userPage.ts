import userData from '../data/user-data.json';
const { fullName, userName, phone, email, address, website, picture } =
  userData;
export const userPage = () => {
  return /*html*/ `
    <div>
      <h1>${fullName}</h1>
      <p>${userName}</p>
      <p>${email}</p>
      <p>${address}</p>
      <p>${phone}</p>
      <p>${website}</p>
      <img src=${picture}></img>
    </div>`;
};
