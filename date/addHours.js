/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given dateInput.
 *
 * @description
 * Add the specified number of hours to the given date..
 *
 * @param {Date|Number} dateInput - the dateInput to be changed
 * @param {Number} num - the number of hours to be added
 * @returns {Date} the new date with the hours added
 * @throws {TypeError} 2 arguments required
 */

const addHours = (dateInput, num) => {
  if (!dateInput || !num) {
    throw new TypeError("2 arguments required");
  }
  const Date = new Date(dateInput);
  Date.setHours(Date.getHours() + num);
  return Date;
};
export default addHours;
