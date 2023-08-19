/**
 * Make the first character of a string uppercase.
 * 
 * const title = capitalizeFirstLetter("robert");
 * 
 * Robert
 */
export const capitalizeFirstLetter = (text: string) => {
	return text.charAt(0).toUpperCase() + text.slice(1); 
}