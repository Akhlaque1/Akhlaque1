/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 * 
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 * 
 */
const getYear = (inputDate) => {
	if (!inputDate) {
		throw new TypeError("Expected as 1 argumenet");
	  }
	const nativeGetYear=inputDate.getFullYear()
	return nativeGetYear ;
};

export default getYear;
