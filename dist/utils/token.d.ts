import IToken from "../models/IToken";
import { IAccessToken } from "../models";
declare const generateToken: (length?: number, onlyDigit?: boolean) => string;
declare function undefinedOr<T>(data: T): T | undefined;
declare function convertToken<T>(token: IAccessToken | null | undefined): IToken<T> | null;
export { generateToken, convertToken, undefinedOr };
