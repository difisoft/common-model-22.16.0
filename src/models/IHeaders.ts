import IToken from '@/models/IToken';

export default interface IHeaders<T, S> {
  token?: IToken<T>,
  secToken?: IToken<S>,
  'accept-language'?: string
}