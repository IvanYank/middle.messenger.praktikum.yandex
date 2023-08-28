import Block from '../../services/block'
import Dialog from '../../components/dialog/dialog';
import ChatDisplay from '../../components/chat-display/chat-display';
import chats from './chats.tmpl'
import store, { StoreEvents } from '../../services/store';
import ChatsController from '../../controllers/chats-controller';
import { chatType } from '../../services/types';

const defaultAvatar = new URL('../../../static/icons/person.svg', import.meta.url).href;

export default class ChatsPage extends Block {
  constructor(props: object) {
    super('div', props, 'chats', true);
    store.on(StoreEvents.UpdatedChats, () => {
      const chatDisplay = this.children.chat as ChatDisplay;
      const data = store.getState();
      let dialogsList: Dialog[] = [];

      data.chats.forEach((chat: chatType) => {
        let count: number | null = chat.unread_count ? chat.unread_count : null;
        let avatar = chat.avatar != null ? `https://ya-praktikum.tech/api/v2/resources${chat.avatar}` : defaultAvatar;

        const dialog = new Dialog({
          image: avatar,
          name: chat.title,
          lastMessage: null,
          date: null,
          count: count,
          attributes: { type: 'button' },
          events: {
            click: {
              element: '',
              event: () => { ChatsController.openChat(chat, chatDisplay, data, avatar) },
            }
          }
        })

        dialogsList.push(dialog);
      })

      this.setChildren({ dialogs: dialogsList })
    });
  }

  render(): DocumentFragment {
    return this.compile(chats, this.props);
  }

  show(): void {
    this.getContent().style.display = 'flex';
  }

  post(): void {
    const addTitleInput = this.getContent().querySelector('.chats__title-input') as HTMLInputElement;
    const addChatButton = this.getContent().querySelector('.chats__add-chat');

    addChatButton?.addEventListener('click', () => { ChatsController.createChat(addTitleInput) })
  }
}
