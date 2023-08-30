const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const booksUrl = 'http://gutendex.com/books';

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

const users = getData(usersUrl);
const books = getData(booksUrl).then(books => books.results);

export { users, books };
