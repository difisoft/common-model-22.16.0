import IStatus from "./IStatus";
import IParamError from "../models/IParamError";
export default interface IResponse<T> {
    status?: IStatus;
    data?: T;
}
declare function createSuccessResponse<T>(data: T): IResponse<T>;
declare function createFailResponse<T>(code: string, messageParams?: string[], errors?: IParamError[]): IResponse<T>;
export { createSuccessResponse, createFailResponse, };
