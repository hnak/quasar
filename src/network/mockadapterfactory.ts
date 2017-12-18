import { AxiosAdapter, AxiosRequestConfig } from 'axios';
import Evaluation from '../model/Evaluation';

export default class MockAdapterFactory {

  public static mockData = [
    new Evaluation('id', 'custId', '佐藤 二郎', 1, '本日レッスン受けました。\n勉強になりました。ありがとうございます！', new Date()),
    new Evaluation('id', 'custId', '佐藤 二郎', 1, '本日レッスン受けました。勉強になりました。ありがとうございます！', new Date()),
    new Evaluation('id', 'custId', '佐藤 二郎', 1, 'とてもいいレッスンでした！', new Date()),
    new Evaluation('id', 'custId', '佐藤 二郎', 1, 'とてもいいレッスンでした！', new Date()),
    new Evaluation('id', 'custId', '佐藤 二郎', 1, 'とてもいいレッスンでした！', new Date()),
    new Evaluation('id', 'custId', '佐藤 二郎', 1, 'とてもいいレッスンでした！', new Date()),
    new Evaluation('id', 'custId', '佐藤 二郎', 1, 'とてもいいレッスンでした！', new Date()),
    new Evaluation('id', 'custId', '佐藤 二郎', 1, 'とてもいいレッスンでした！', new Date()),
    new Evaluation('id', 'custId', '佐藤 二郎', 1, 'とてもいいレッスンでした！', new Date()),
  ];

  public static mockAdapter = (config: AxiosRequestConfig) =>
    new Promise((resolve, reject) => {
      resolve({
        data: MockAdapterFactory.mockData,
        status: 200,
        then: null,
      });
    })
}
