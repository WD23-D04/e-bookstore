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

export const getFilteredBooks = (booksData, categoryUrl) => {
  return booksData.filter((book) => {
    const categories = book.categories
      .split('|')
      .map((category) => category.toLowerCase());
    const categoryFilter = categoryUrl || '';
    const matchesCategory = categories.includes(categoryFilter);
    return matchesCategory;
  });
};
