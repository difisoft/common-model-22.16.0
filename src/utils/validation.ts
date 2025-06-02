import FieldRequiredError from '@/errors/FieldRequiredError';
import InvalidParameterError from '@/errors/InvalidParameterError';
import IParamError from '@/errors/IParamError';
import { EMAIL_VALIDATION_FAILED } from '@/errors';
import InvalidFieldValueError from '@/errors/InvalidFieldValueError';

declare type CheckFunc<T, R> = (value: T, name: string) => IValidationResult<R>;
declare type CheckFuncBool<T, R> = (value: T, name: string) => boolean;

declare interface IValidationResult<R> {
  success: boolean;
  data?: R;
  params?: IParamError[];
}

function createFailValidation<R>(
  code: string,
  messageParams: string[] | undefined,
  paramName: string
): IValidationResult<R> {
  return {
    success: false,
    params: [
      {
        code: code,
        messageParams: messageParams,
        param: paramName,
      },
    ],
  };
}

function createFailFromError<R>(error: InvalidParameterError): IValidationResult<R> {
  return {
    success: false,
    params: error.params,
  };
}

function createSuccessValidation<R>(data: R): IValidationResult<R> {
  return {
    success: true,
    data: data,
  };
}

const INVALID_VALUE = 'INVALID_VALUE';
const NOT_GREATER_THAN_ERROR = 'NOT_GREATER_THAN_ERROR';

export class Validate<T> {
  private isRequired: boolean = false;
  private isFetchCount: boolean = false;
  private checks: CheckFunc<T, T>[] = [];

  constructor(
    private readonly fieldValue: any,
    private readonly fieldName: string
  ) {}

  public setRequire(): Validate<T> {
    this.isRequired = true;
    return this;
  }

  public setIsFetchCount(): Validate<T> {
    this.isFetchCount = true;
    return this;
  }

  public add(func: CheckFunc<T, T>): Validate<T> {
    this.checks.push(func);
    return this;
  }

  public addCheck(
    func: CheckFuncBool<T, T>,
    code?: string,
    messageParams?: string[],
    paramName?: string
  ): Validate<T> {
    this.checks.push((value: T, name: string) => {
      if (func(value, name)) {
        return createSuccessValidation(value);
      }
      return createFailValidation(
        code ? code : INVALID_VALUE,
        messageParams,
        paramName ? paramName : this.fieldName
      );
    });
    return this;
  }

  public adds(funcs: CheckFunc<T, T>[]): Validate<T> {
    this.checks = this.checks.concat(funcs);
    return this;
  }

  public throwValid(invalidParameterError?: InvalidParameterError): void {
    const result = this.valid();
    if (result && !result.success) {
      if (invalidParameterError) {
        invalidParameterError.adds(result.params);
      } else {
        throw new InvalidParameterError().adds(result.params);
      }
    }
  }

  public valid(): IValidationResult<T> {
    let result: IValidationResult<T> = createSuccessValidation(this.fieldValue);
    if (this.isRequired) {
      if (isEmpty(this.fieldValue)) {
        return createFailFromError(new FieldRequiredError(this.fieldName));
      }
    }
    if (this.isFetchCount) {
      if (!isEmpty(this.fieldValue) && (isNaN(this.fieldValue) || this.fieldValue < 0)) {
        return createFailFromError(new InvalidFieldValueError(this.fieldName, this.fieldValue));
      }
    }
    if (this.checks.length > 0) {
      if (this.isRequired || !isEmpty(this.fieldValue)) {
        for (let i = 0; i < this.checks.length; i++) {
          result = this.checks[i](this.fieldValue, this.fieldName);
          if (result && !result.success) {
            return result;
          }
        }
      }
    }
    return result;
  }

  public checkGt(minPrice: T): Validate<T> {
    this.checks.push((fieldValue: T, fieldName: string) => {
      if (fieldValue < minPrice) {
        return createFailValidation(
          NOT_GREATER_THAN_ERROR,
          [`${fieldValue}`, `${minPrice}`],
          fieldName
        );
      } else {
        return createSuccessValidation(this.fieldValue);
      }
    });
    return this;
  }
}

function validate<T>(fieldValue: T, fieldName: string): Validate<T> {
  return new Validate(fieldValue, fieldName);
}

function isEmpty(fieldValue: any): boolean {
  return fieldValue === undefined || fieldValue === null || fieldValue === '';
}

function validateEmail(fieldValue: string, paramName: string = 'email'): IValidationResult<string> {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(fieldValue.toLowerCase())) {
    return createSuccessValidation(fieldValue);
  } else {
    return createFailValidation(EMAIL_VALIDATION_FAILED, undefined, paramName);
  }
}

function validatePassword(
  fieldValue: string,
  paramName: string = 'password',
  regex: string = ''
): IValidationResult<string> {
  return createSuccessValidation(fieldValue);
}

export {
  validate,
  validateEmail,
  createFailValidation,
  createFailFromError,
  createSuccessValidation,
  validatePassword,
};
