import ICommonForward from '@/models/scope/ICommonForward';
import { IForwardUriResult } from '../models';
import IForwardService from '@/models/scope/IForwardService';
import IScope from '@/models/scope/IScope';

function getForwardUriWithSetting(msg: IInputUri | string, forwardConfig: ICommonForward): IForwardUriResult {
  const result: IForwardUriResult = {};
  const forwardData: IForwardService = <IForwardService>forwardConfig;
  result.topic = forwardData.service;
  result.uri = forwardData.uri;
  return result;
}

export interface IInputUri {
  uri: string;
}

export function getForwardUri(msg: IInputUri | string, matchedScope: IScope): IForwardUriResult {
  return getForwardUriWithSetting(msg, matchedScope.forwardData);
}