interface IBook {
  id: string;
  title: string;
  author: string;
  // ??
  price: string;
}
export const formatBook = (book : IBook) => {
  const formattedBook = { ...book };

  // format title
  const _title = formattedBook.title.trim();
  const uppercaseTitle =
    _title.slice(0, 1).toUpperCase() + _title.slice(1).toLowerCase();

  formattedBook.title = uppercaseTitle;

  // format author

  formattedBook.author = formattedBook.author.toLowerCase();

  // format price

  formattedBook.price = `${formattedBook.price} $`;

  return formattedBook;
};
