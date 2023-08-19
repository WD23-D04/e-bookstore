/**
 * Make the first character of a string uppercase.
 * 
 * const title = tools.formatWord("robert");
 * 
 * Robert
 */
export const formatWord = (title: string) => {
  const trimmedTitle = title.trim();
  const _title =
    trimmedTitle.slice(0, 1).toUpperCase() +
    trimmedTitle.slice(1).toLowerCase();
  return _title;
};

/**
 * Adds two numbers and returns the result.
 * 
 * const sum = tools.sume(4,5);
 * 
 * 9
 */
export const sume = (a:number, b: number) => a + b;