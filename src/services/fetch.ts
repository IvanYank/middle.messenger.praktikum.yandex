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
  static get(url: string, options: OptionsWithoutMethod = {}): Promise<object> {
    return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  }

  static post(url: string, options: OptionsWithoutMethod = {}): Promise<object> {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  }

  static put(url: string, options: OptionsWithoutMethod = {}): Promise<object> {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  }

  static delete(url: string, options: OptionsWithoutMethod = {}): Promise<object> {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  }

  private static request(url: string, options: Options = { method: METHODS.GET }, timeout = 5000): Promise<object> {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      const error = () => {
        try {
          reject(JSON.parse(xhr.response));
        } catch (e) {
          reject(xhr.response);
        }
      }

      xhr.open(
        method,
        isGet && data ? `${baseAPIUrl}${url}?${queryString(data)}` : `${baseAPIUrl}${url}`,
      );

      if (headers) {
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      xhr.onabort = error;
      xhr.onerror = error;
      xhr.ontimeout = error;

      xhr.timeout = timeout;
      xhr.withCredentials = true;

      xhr.onload = () => {
        if (xhr.status == 200) {
          try {
            resolve(JSON.parse(xhr.response));
          } catch (e) {
            resolve(xhr.response);
          }
        } else {
          error();
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
