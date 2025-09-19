import IHeaders from './IHeaders';
import { IUserData } from './IToken';
export default interface IDataRequest<T, S> {
    headers?: IHeaders<T, S>;
    sourceIp?: string;
    deviceType?: string;
}
export type IUserRequest = IDataRequest<IUserData, undefined>;
