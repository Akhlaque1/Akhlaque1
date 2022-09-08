import { endOfMonth as nativeEndOfMonth } from 'date-fns';

import date from './date';

const endOfMonth = (dateInput) => nativeEndOfMonth(date(dateInput));

export default endOfMonth;
