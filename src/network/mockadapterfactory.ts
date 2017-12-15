import { AxiosAdapter, AxiosRequestConfig } from 'axios';
import Evaluation from '../model/Evaluation';

export default class MockAdapterFactory {
  public static mockData = [{
    id: 1,
    title: 'Some Article',
  }];

  public static mockAdapter = (config: AxiosRequestConfig) =>
    new Promise((resolve, reject) => {
      resolve({
        data: MockAdapterFactory.mockData,
        status: 200,
        then: null,
      });
    })
}
