"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWeekend = exports.formatISO8601StringToDate = exports.convertISO8601StringToDate = exports.getEndOfMonth = exports.getStartOfMonth = exports.getEndOfWeek = exports.getStartOfWeek = exports.countDaysOfAYear = exports.countDayBetween = exports.getStartOfDate = exports.getEndOfDate = exports.compareDateOnly = exports.TIME_DISPLAY_FORMAT = exports.DATE_DISPLAY_FORMAT = exports.DATETIME_DISPLAY_FORMAT = exports.MINUTE_DATE_DISPLAY_FORMAT = exports.convertStringToDate = exports.formatDateToDisplay = void 0;
const moment_1 = __importDefault(require("moment"));
const InvalidParameterError_1 = __importDefault(require("../errors/InvalidParameterError"));
const log_1 = require("../log");
const MINUTE_DATE_DISPLAY_FORMAT = 'YYYY-MM-DD';
exports.MINUTE_DATE_DISPLAY_FORMAT = MINUTE_DATE_DISPLAY_FORMAT;
const DATE_DISPLAY_FORMAT = 'YYYYMMDD';
exports.DATE_DISPLAY_FORMAT = DATE_DISPLAY_FORMAT;
const DATETIME_DISPLAY_FORMAT = 'YYYYMMDDhhmmss';
exports.DATETIME_DISPLAY_FORMAT = DATETIME_DISPLAY_FORMAT;
const TIME_DISPLAY_FORMAT = 'hhmmss';
exports.TIME_DISPLAY_FORMAT = TIME_DISPLAY_FORMAT;
const isWeekend = (date) => {
    try {
        return date.getDay() === 6 || date.getDay() === 0; // 6 = Saturday, 0 = Sunday
    }
    catch (e) {
        log_1.logger.error(`error on check isWeekend: ${date} - error: ${e}`);
        throw new InvalidParameterError_1.default();
    }
};
exports.isWeekend = isWeekend;
const countDayBetween = (dateFrom, dateTo) => {
    try {
        const momentFrom = (0, moment_1.default)(dateFrom);
        const momentTo = (0, moment_1.default)(dateTo);
        return Math.ceil(momentTo.diff(momentFrom, 'days', true));
    }
    catch (e) {
        log_1.logger.error(`error on countDateBetween from: ${dateFrom} - to: ${dateTo} - error: ${e}`);
        throw new InvalidParameterError_1.default();
    }
};
exports.countDayBetween = countDayBetween;
const formatDateToDisplay = (date, format = DATE_DISPLAY_FORMAT) => {
    const obj = (0, moment_1.default)(date);
    if (obj.isValid()) {
        return moment_1.default.utc(date).format(format);
    }
    else {
        throw new Error(`Invalid date: ${date}`);
    }
};
exports.formatDateToDisplay = formatDateToDisplay;
const convertStringToDate = (data, format = DATE_DISPLAY_FORMAT) => {
    const obj = moment_1.default.utc(data, format);
    if (obj.isValid()) {
        return obj.toDate();
    }
    else {
        throw new Error(`Invalid date: ${data}`);
    }
};
exports.convertStringToDate = convertStringToDate;
const convertISO8601StringToDate = (data) => {
    const obj = (0, moment_1.default)(data);
    if (obj.isValid()) {
        return obj.toDate();
    }
    else {
        throw new Error(`Invalid date: ${data}`);
    }
};
exports.convertISO8601StringToDate = convertISO8601StringToDate;
const formatISO8601StringToDate = (data) => {
    return (0, moment_1.default)(data).toISOString();
};
exports.formatISO8601StringToDate = formatISO8601StringToDate;
const compareDateOnly = (date1, date2) => {
    const temp1 = new Date(date1.getTime());
    const temp2 = new Date(date2.getTime());
    temp1.setHours(0, 0, 0, 0);
    temp2.setHours(0, 0, 0, 0);
    return temp1.getTime() - temp2.getTime();
};
exports.compareDateOnly = compareDateOnly;
const getEndOfDate = (date) => {
    const temp = new Date(date.getTime());
    temp.setHours(23, 59, 59, 0);
    return temp;
};
exports.getEndOfDate = getEndOfDate;
const getStartOfDate = (date) => {
    const temp = new Date(date.getTime());
    temp.setHours(0, 0, 0, 0);
    return temp;
};
exports.getStartOfDate = getStartOfDate;
const getStartOfWeek = (date) => {
    const temp = new Date(date.getTime());
    const diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    temp.setDate(diff);
    temp.setHours(0, 0, 0, 0);
    return temp;
};
exports.getStartOfWeek = getStartOfWeek;
const getEndOfWeek = (date) => {
    const temp = getStartOfWeek(date);
    temp.setDate(temp.getDate() + 6);
    temp.setHours(23, 59, 59, 0);
    return temp;
};
exports.getEndOfWeek = getEndOfWeek;
const getStartOfMonth = (date) => {
    const temp = new Date(date.getTime());
    temp.setDate(1);
    temp.setHours(0, 0, 0, 0);
    return temp;
};
exports.getStartOfMonth = getStartOfMonth;
const getEndOfMonth = (date) => {
    const temp = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    temp.setHours(23, 59, 59, 0);
    return temp;
};
exports.getEndOfMonth = getEndOfMonth;
const countDaysOfAYear = (year) => {
    return isLeapYear(year) ? 366 : 365;
};
exports.countDaysOfAYear = countDaysOfAYear;
const isLeapYear = (year) => {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
};
//# sourceMappingURL=date.js.map