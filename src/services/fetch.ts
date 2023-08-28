import queryString from "../utils/queryString";

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Options = {
  method: METHODS;
  data?: object,
  headers?: Record<string, string>,
  timeout?: number,
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

const baseAPIUrl = 'https://ya-praktikum.tech/api/v2/';

class HTTPTransport {
  static get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  }

  static post(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  }

  static put(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  }

  static delete(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  }

  private static request(url: string, options: Options = { method: METHODS.GET }, timeout = 5000): Promise<XMLHttpRequest> {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        isGet && data ? `${baseAPIUrl}${url}?${queryString(data)}` : `${baseAPIUrl}${url}`,
      );

      if (headers) {
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      xhr.onabort = () => reject(JSON.parse(xhr.response));
      xhr.onerror = () => reject(JSON.parse(xhr.response));
      xhr.ontimeout = () => reject(JSON.parse(xhr.response));

      xhr.timeout = timeout;
      xhr.withCredentials = true;

      xhr.onload = () => {
        if (xhr.status == 200) {
          resolve(xhr);
        } else {
          reject(xhr.response)
        }
      };

      if (isGet || !data) {
        xhr.send();
      } else {
        if (data instanceof FormData) {
          xhr.send(data);
        } else {
          xhr.send(JSON.stringify(data));
        }
      }
    });
  }
}

export default HTTPTransport
