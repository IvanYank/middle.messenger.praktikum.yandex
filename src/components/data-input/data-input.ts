import Handlebars from 'handlebars';
import Block from '../../services/block'
import input from './data-input.tmpl'

export default class ButtonLink extends Block {
  constructor(props: {} | undefined){
    super('div', props, true)
  }

  render(): string {    
    return Handlebars.compile(input)(this.props);
  }
}
