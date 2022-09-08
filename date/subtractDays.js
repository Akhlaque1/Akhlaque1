/**
 * @name subDays/subtractDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|Number} dateInput - the date to be changed
 * @param {Number} num - the number of days to be subtracted
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

const subtractDays = (dateInput, num) => {
  if (!dateInput || !num) {
    throw new TypeError("2 arguments required");
  }
  const nativeSubDays = new Date(dateInput);
  nativeSubDays.setDate(nativeSubDays.getDate() - num);
  return nativeSubDays;
};
export default subtractDays;

