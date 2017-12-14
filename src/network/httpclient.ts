// Framework
import Axios, { AxiosAdapter, AxiosRequestConfig } from 'axios';
import MockAdapter from './mockadapterfactory';

const URL = 'http://localhost:3000';
const HTTP = Axios.create({
  baseURL: URL,
  withCredentials: true,
  xsrfHeaderName: 'X-CSRF-Token',
});
const ADAPTOR: any = (process.env.NODE_ENV === 'development') ? MockAdapter.mockAdapter : HTTP.defaults.adapter;

export default class HttpClient {
  public static getAxios() {
    return HTTP;
  }
  public static getAdaptor() {
    return ADAPTOR;
  }
}
