import IStatus from '../models/IStatus';
export default class GeneralError extends Error {
    code: any;
    messageParams: any;
    source: any;
    params: any;
    isSystemError: boolean;
    constructor(code?: string, params?: any[] | null, source?: any, messageParams?: any);
    toStatus: () => IStatus;
}
declare function createFromStatus(status: IStatus): GeneralError;
export { createFromStatus };
