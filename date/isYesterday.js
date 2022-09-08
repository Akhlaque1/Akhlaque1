//import isSameDay from "..//utils/isSameDay";
/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is yesterday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * var result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */

const df = require("date-fns")
const isYesterday = (date) => {
   if (!date) {
      throw new TypeError("Expected as 1 argumenet");
    }
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (yesterday.toDateString() === date.toDateString()) {
      return true;
    }
    return false;
  }
//export default isYesterday;
console.log(isYesterday(new Date(2014, 9, 5, 14, 0)));
console.log(df.isYesterday(new Date(2014, 9, 5, 14, 0)));
