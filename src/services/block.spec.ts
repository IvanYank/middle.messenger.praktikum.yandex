import { describe, it } from "mocha";
import { expect, use } from "chai"
import Block from "./block";
import * as sinonChai from 'sinon-chai';

describe('Проверка работы Block', () => {
  use(sinonChai)
  let block: Block;

  beforeEach(() => {
    block = new Block('div', {
      attributes: {
        class: 'testClass2',
      },
    }, 'testClass', true);
  })

  it('Блок создаётся с правильным базовым классом', () => {
    expect(block.getContent().classList.contains('testClass')).to.equal(true)
  })

  it('Блок создаётся с правильным кастомным классом', () => {
    expect(block.getContent().classList.contains('testClass2')).to.equal(true)
  })

  it('Блоку правильно устанавливаются пропсы', () => {
    block.setProps({ test: 'test' })
    expect(block.props.test).to.equal('test')
  })

  it('Блоку правильно присваиваются дети', () => {
    const testChild = new Block('div', {}, '', true)
    block.setChildren({ testchild: testChild })
    expect(block.children.testchild).to.equal(testChild)
  })

  it('Блоку правильно присваиваются дети и пропсы', () => {
    const testChild = new Block('div', {}, '', true)
    block.setPropsChildren({ test: 'test' }, { testChild: testChild })
    expect(block.children.testChild).to.equal(testChild)
    expect(block.props.test).to.equal('test')
  })

  it('Блок скрывается', () => {
    block.hide()
    expect(block.getContent().style.display).to.equal('none')
  })

  it('Блок показывается', () => {
    block.show()
    expect(block.getContent().style.display).to.equal('block')
  })
});
