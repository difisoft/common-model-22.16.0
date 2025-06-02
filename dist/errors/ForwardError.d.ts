import IStatus from '@/errors/IStatus';
export declare class ForwardError extends Error {
    status: IStatus;
    isForwardError: boolean;
    constructor(status: IStatus);
}
