import IToken from "@/models/IToken";
import { IAccessToken } from "../models";

const generateToken = (length: number = 6, onlyDigit: boolean = true): string => {
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  if (onlyDigit) {
    possible = '0123456789';
  }
  
  let text = '';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

function undefinedOr<T>(data: T): T | undefined {
  if (data == null) {
    return undefined;
  }
  return data;
}

function convertToken<T>(token: IAccessToken | null | undefined): IToken<T> | null {
  if (token == null) {
    return null;
  }

  return {
    userData: undefinedOr<T>(token.ud as T),
    appVersion: undefinedOr(token.appV),
    clientId: undefinedOr(token.cId),
    domain: undefinedOr(token.dm),
    loginMethod: undefinedOr(token.lm),
    osVersion: undefinedOr(token.osV),
    platform: undefinedOr(token.pl),
    grantType: undefinedOr(token.gt),
    refreshTokenId: undefinedOr(token.rId),
    scopeGroupIds: undefinedOr(token.sgIds),
    serviceCode: undefinedOr(token.sc),
    serviceUserId: undefinedOr(token.suId),
    serviceUsername: undefinedOr(token.su),
    userId: undefinedOr(token.uId),
  };
}

export { generateToken, convertToken, undefinedOr }
