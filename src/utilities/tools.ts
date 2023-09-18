import * as tools from './tools';
import { IBook } from '../interfaces';

export const sanitizeBook = (book: IBook) => {
  book.title = tools.capitalizeFirst(book.title);
};

export const capitalizeFirst = (text: string) => {
  text = text.trim();
  return `${text.slice(0, 1).toUpperCase()}${text.slice(1).toLowerCase()}`;
};

export const capitalizeFirstLetterEveryWord = (text: string) => {
  const words = text.split(' ');
  return words.map((word) => tools.capitalizeFirst(word)).join(' ');
};

export const getFilteredBooks = (booksData: IBook[], categoryUrl: string) => {
  return booksData.filter((book) => {
    const categories = book.categories
      .split('|')
      .map((category) => category.toLowerCase());
    const categoryFilter = categoryUrl || '';
    const matchesCategory = categories.includes(categoryFilter);
    return matchesCategory;
  });
};

export const searchFilterBooks = (booksData: IBook[], filter: string) => {
  return booksData.filter((book) => {
    const { title, author } = book;
    return title === filter || author === filter;
  });
};

export const filterBooksPerPrice = (booksData: IBook[], price: number) => {
  return booksData.filter((book) => {
    return book.price < price;
  });
};

export const findLowestPrice = (booksData: IBook[]) => {
  return booksData.reduce((minPrice, currBook) => {
    return currBook.price < minPrice ? currBook.price : minPrice;
  });
};

export const sortPerAscendingPrice = (array: any) => {
  return array.sort((a, b) => a.price - b.price);
};

// add to shopping card button

export const addToShoppingCart = (shoppingCart, book) => {
  shoppingCart.push(book);
};
