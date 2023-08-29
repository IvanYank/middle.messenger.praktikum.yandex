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
      const dialogsList: Dialog[] = [];

      data.chats.forEach((chat: chatType) => {
        const count: number | null = chat.unread_count ? chat.unread_count : null;
        const avatar = chat.avatar != null ? `https://ya-praktikum.tech/api/v2/resources${chat.avatar}` : defaultAvatar;

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
              event: () => {
                if (chat.id != chatDisplay.props.chatId || !chatDisplay.props.chatId) {
                  ChatsController.openChat(chat, chatDisplay, data, avatar)
                }
              }
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
    const addChatForm = this.getContent().querySelector('.chats__creater') as HTMLFormElement;
    const addTitleInput = this.getContent().querySelector('.chats__title-input') as HTMLInputElement;

    addChatForm.addEventListener('submit', (e: Event) => {
      e.preventDefault();
      ChatsController.createChat(addTitleInput)
    })
  }
}
