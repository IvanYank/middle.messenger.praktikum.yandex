import Block from '../../services/block'
import data from './chat-display.tmpl'

export default class ChatDisplay extends Block {
  constructor(props: object) {
    super('div', props, 'chats__right-block', true);

    const settingsButton = this.getContent().querySelector('.chats__settings') as HTMLButtonElement;
    const settingsList = this.getContent().querySelector('.chats__settings-list') as HTMLElement;

    const messageInput = this.getContent().querySelector('.chats__send-message') as HTMLInputElement;
    const sendButton = this.getContent().querySelector('.chats__send-button') as HTMLButtonElement;

    sendButton.addEventListener('click', () => {
      if (messageInput.value != '') {
        const socket = this.props.socket;
        const output = JSON.stringify({
          content: messageInput.value,
          type: 'message',
        });

        socket.send(output)
        socket.send(JSON.stringify({
          content: '0',
          type: 'get old',
        }))
        
        messageInput.value = '';
      }
    })

    settingsButton.addEventListener('click', () => {
      settingsList.classList.toggle('chats__settings-list_open');
    })
  }

  render(): DocumentFragment {
    return this.compile(data, this.props);
  }
}
