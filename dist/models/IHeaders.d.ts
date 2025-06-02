import IToken from '@/models/IToken';
export default interface IHeaders {
    token?: IToken;
    secToken?: IToken;
    'accept-language'?: string;
}
