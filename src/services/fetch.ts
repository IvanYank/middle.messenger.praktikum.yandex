enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Options = {
  method: METHODS;
  data?: any,
  headers?: Record<string, string>,
  timeout?: number;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

function queryStringify(data: any) {
  if (typeof data !== 'object') {
    throw new Error('Data must be Object');
  }

  const keys:Array<string> = Object.keys(data);
  return keys.reduce((result, key: string, index: number) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}

class HTTPTransport {
  get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(url, {...options, method: METHODS.GET}, options.timeout);
  }

  post(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(url, {...options, method: METHODS.POST}, options.timeout);
  }

  put(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
  }

  delete(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
  }

  request(url: string, options: Options = { method: METHODS.GET }, timeout = 5000): Promise<XMLHttpRequest> {
    const {method, data, headers} = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject('Need to be method');
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method, 
        isGet && data
        ? `${url}${queryStringify(data)}`
        : url,
      );

      if(headers){
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      xhr.onload = function() {
        resolve(xhr);
      };
  
      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;
      
      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}

export default HTTPTransport
