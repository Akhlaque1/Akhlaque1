/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 */

const isSameDay = (dateLeft, dateRight) => {
  if (!dateLeft || !dateRight) {
    throw new TypeError("Expected parameter as string");
  }
  return dateLeft.toString().startsWith(dateRight.toString().substring(0, 10));
};
export default isSameDay;
