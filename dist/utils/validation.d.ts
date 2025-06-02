import InvalidParameterError from '@/errors/InvalidParameterError';
import IParamError from '@/errors/IParamError';
declare type CheckFunc<T, R> = (value: T, name: string) => IValidationResult<R>;
declare type CheckFuncBool<T, R> = (value: T, name: string) => boolean;
declare interface IValidationResult<R> {
    success: boolean;
    data?: R;
    params?: IParamError[];
}
declare function createFailValidation<R>(code: string, messageParams: string[] | undefined, paramName: string): IValidationResult<R>;
declare function createFailFromError<R>(error: InvalidParameterError): IValidationResult<R>;
declare function createSuccessValidation<R>(data: R): IValidationResult<R>;
export declare class Validate<T> {
    private readonly fieldValue;
    private readonly fieldName;
    private isRequired;
    private isFetchCount;
    private checks;
    constructor(fieldValue: any, fieldName: string);
    setRequire(): Validate<T>;
    setIsFetchCount(): Validate<T>;
    add(func: CheckFunc<T, T>): Validate<T>;
    addCheck(func: CheckFuncBool<T, T>, code?: string, messageParams?: string[], paramName?: string): Validate<T>;
    adds(funcs: CheckFunc<T, T>[]): Validate<T>;
    throwValid(invalidParameterError?: InvalidParameterError): void;
    valid(): IValidationResult<T>;
    checkGt(minPrice: T): Validate<T>;
}
declare function validate<T>(fieldValue: T, fieldName: string): Validate<T>;
declare function validateEmail(fieldValue: string, paramName?: string): IValidationResult<string>;
declare function validatePassword(fieldValue: string, paramName?: string, regex?: string): IValidationResult<string>;
export { validate, validateEmail, createFailValidation, createFailFromError, createSuccessValidation, validatePassword, };
