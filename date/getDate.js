/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|Number} inputDate - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 */
const df=require("date-fns")
const getDate = (inputDate) => {
	if (!inputDate) {
		throw new TypeError("Expected as 1 argumenet");
	  }
	const nativeDate=inputDate.getDate()
	return nativeDate ;
};
//export default getDate;
console.log(getDate(new Date(2013, 2, 29)))
console.log(df.getDate(new Date(2013, 2, 29)))
