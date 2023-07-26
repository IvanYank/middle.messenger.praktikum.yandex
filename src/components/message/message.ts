import Handlebars from 'handlebars';
import Block from '../../services/block'
import input from './message.tmpl'

export default class ButtonLink extends Block {
  constructor(props){
    super('div', props, true)
  }

  render(): string {    
    return Handlebars.compile(input)(this.props);
  }
}
