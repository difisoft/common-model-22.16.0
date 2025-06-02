"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffMsTime = diffMsTime;
exports.getMsTime = getMsTime;
/**
 * return the differrence between @var time and current time in ms
 * @param time
 */
function diffMsTime(time) {
    const currentTime = process.hrtime();
    return currentTime[0] * 1000 + currentTime[1] / 1000000 - time;
}
/**
 * get the time in ms
 * @param hrTime
 */
function getMsTime(hrTime = null) {
    const currentTime = hrTime == null ? process.hrtime() : hrTime;
    return currentTime[0] * 1000 + currentTime[1] / 1000000;
}
//# sourceMappingURL=mstime.js.map