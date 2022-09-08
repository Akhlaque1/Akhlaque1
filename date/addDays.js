
/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} dateInput - the date to be changed
 * @param {Number} num - the Number of days to be added
 * @returns {Date} the new date with the days added
 * @throws {TypeError} 2 arguments required
 *
 */

const addDays = (dateInput, num) => {
    const result=new Date(dateInput);
    result.setDate(result.getDate()-num);
    return result;
}
export default addDays;
