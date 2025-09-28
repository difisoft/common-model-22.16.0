"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetryError = void 0;
exports.promise = promise;
exports.handlePromise = handlePromise;
exports.asyncWithRetry = asyncWithRetry;
exports.allPromiseDone = allPromiseDone;
function promise(func) {
    const promise = new Promise((resolve, reject) => {
        func(resolve, reject);
    });
    return promise;
}
function handlePromise(func, reject, prom) {
    prom.then((data) => {
        func(data);
    }).catch(reject);
}
class RetryError extends Error {
    constructor(errors, message) {
        super(message);
        this.errors = errors;
    }
}
exports.RetryError = RetryError;
async function asyncWithRetry(func, maxRetryTime) {
    if (maxRetryTime <= 0) {
        return func();
    }
    const errors = [];
    for (let i = 0; i <= maxRetryTime; i++) {
        try {
            const result = await func(); // tslint:disable-line
            return result;
        }
        catch (e) {
            errors.push(e);
        }
    }
    throw new RetryError(errors, `fail to retry with ${maxRetryTime} times`);
}
class PromiseJoinError extends Error {
    constructor(results) {
        super("");
        this.results = results;
    }
}
async function allPromiseDone(promises, stopOnError = false, returnError = true) {
    const data = [];
    promises.forEach(() => data.push({
        state: 0
    }));
    let finishCount = 0;
    let errorCount = 0;
    const handleResult = (resolve, reject, result, index, isError = false) => {
        if (stopOnError && errorCount > 0) {
            return;
        }
        if (isError) {
            data[index].state = 2;
            data[index].error = result;
            errorCount++;
            if (stopOnError) {
                reject(result);
                return;
            }
        }
        else {
            data[index].state = 1;
            data[index].result = result;
        }
        finishCount++;
        if (finishCount === data.length) {
            if (returnError) {
                if (errorCount === 0) {
                    resolve(data);
                }
                else {
                    reject(new PromiseJoinError(data));
                }
            }
            else {
                resolve(data);
            }
        }
    };
    return new Promise((resolve, reject) => {
        promises.forEach((pro, index) => {
            pro
                .then((result) => handleResult(resolve, reject, result, index))
                .catch((err) => handleResult(resolve, reject, err, index, true));
        });
    });
}
//# sourceMappingURL=promise.js.map