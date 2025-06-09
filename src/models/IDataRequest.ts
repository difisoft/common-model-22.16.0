import IHeaders from './IHeaders';

export default interface IDataRequest<T, S> {
  headers?: IHeaders<T, S>,
  sourceIp?: string,
  deviceType?: string
}