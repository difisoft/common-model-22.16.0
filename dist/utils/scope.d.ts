import { IForwardUriResult } from '../models';
import IScope from '../models/scope/IScope';
export interface IInputUri {
    uri: string;
}
export declare function getForwardUri(msg: IInputUri | string, matchedScope: IScope): IForwardUriResult;
