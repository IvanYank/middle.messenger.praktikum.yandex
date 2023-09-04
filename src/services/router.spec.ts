import { describe, it } from "mocha";
import { expect } from "chai"
import router from "./router";

describe('Проверка работы Router', () => {
  it('Метод go изменит длину history на 1', () => {
    router.go('/test');
    expect(window.history.length).to.equal(2)
  })

  it('Метод back не изменит длину истории', () => {
    router.back();
    expect(window.history.length).to.equal(2)
  })

  it('Метод forward не изменит длину истории', () => {
    router.forward();
    expect(window.history.length).to.equal(2)
  })

  it('Возврат пустого роута при несуществующем пути', () => {
    expect(router.getRoute('/test')).to.equal(undefined)
  })
});
