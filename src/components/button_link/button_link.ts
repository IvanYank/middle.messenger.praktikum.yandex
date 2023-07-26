import Handlebars from 'handlebars';
import Block from '../../services/block'
import button from './button_link.tmpl'

export default class ButtonLink extends Block {
  constructor(props){
    super('a', props, false)
  }

  render(): string {    
    return Handlebars.compile(button)({});
  }
}
