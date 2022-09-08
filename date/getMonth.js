/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required

 */
const getMonth = (inputDate) => {
	if (!inputDate) {
		throw new TypeError("Expected as 1 argumenet");
	  }
	const nativeMonth=inputDate.getMonth()
	return nativeMonth ;
};
export default getMonth;
