import { describe, it } from "mocha";
import { expect, use } from "chai"
import { createSandbox, SinonStub } from 'sinon';
import HTTPTransport from "./fetch";
import * as sinonChai from 'sinon-chai';

describe('Проверка работы Fetch', () => {
  use(sinonChai)
  const sandbox = createSandbox();
  let http: HTTPTransport;
  let request: SinonStub;

  beforeEach(() => {
    http = new HTTPTransport();
    request = sandbox.stub(http, 'request')
  })

  afterEach(() => {
    sandbox.restore();
  })

  describe('Вызов методов без таймаута', () => {
    it('Метод GET должен вызвать request с полем "method: GET"', () => {
      http.get('/', {})
      expect(request).calledWithMatch('/', { method: 'GET' })
    })

    it('Метод POST должен вызвать request с полем "method: POST"', () => {
      http.post('/', {})
      expect(request).calledWithMatch('/', { method: 'POST' })
    })

    it('Метод PUT должен вызвать request с полем "method: PUT"', () => {
      http.put('/', {})
      expect(request).calledWithMatch('/', { method: 'PUT' })
    })

    it('Метод DELETE должен вызвать request с полем "method: DELETE"', () => {
      http.delete('/', {})
      expect(request).calledWithMatch('/', { method: 'DELETE' })
    })
  })

  describe('Вызов методов с таймаутом = 5000', () => {
    it('Метод GET должен вызвать request с полями "method: GET", "timeout: 5000"', () => {
      http.get('/', { timeout: 5000 })
      expect(request).calledWithMatch('/', { method: 'GET' }, 5000)
    })
  
    it('Метод POST должен вызвать request с полями "method: POST", "timeout: 5000"', () => {
      http.post('/', { timeout: 5000 })
      expect(request).calledWithMatch('/', { method: 'POST' }, 5000)
    })
  
    it('Метод PUT должен вызвать request с полями "method: PUT", "timeout: 5000"', () => {
      http.put('/', { timeout: 5000 })
      expect(request).calledWithMatch('/', { method: 'PUT' }, 5000)
    })
  
    it('Метод DELETE должен вызвать request с полями "method: DELETE", "timeout: 5000"', () => {
      http.delete('/', { timeout: 5000 })
      expect(request).calledWithMatch('/', { method: 'DELETE' }, 5000)
    })
  })
});
