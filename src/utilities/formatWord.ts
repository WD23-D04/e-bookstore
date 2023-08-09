export const formatWord = (title: string) => {
  const trimmedTitle = title.trim();
  const _title =
    trimmedTitle.slice(0, 1).toUpperCase() +
    trimmedTitle.slice(1).toLowerCase();
  return _title;
};
