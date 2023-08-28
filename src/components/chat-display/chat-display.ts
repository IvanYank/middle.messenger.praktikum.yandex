import Block from '../../services/block'
import ChatsController from '../../controllers/chats-controller';
import data from './chat-display.tmpl'
import { Indexed } from '../../services/types';
import isEqual from '../../utils/isEqual';

export default class ChatDisplay extends Block {
  constructor(props: object) {
    super('div', props, 'display', true);
  }

  render(): DocumentFragment {
    return this.compile(data, this.props);
  }

  componentDidUpdate(oldProps: Indexed, newProps: Indexed): boolean {
    if (!isEqual(oldProps, newProps)) {
      if (oldProps.props.attributes) {
        oldProps.props.socket.close();
      }
      return true
    } else {
      return false;
    }
  }

  post(): void {
    const settingsButton = this.getContent().querySelector('.display__settings') as HTMLButtonElement;
    const settingsList = this.getContent().querySelector('.display__settings-list') as HTMLElement;

    const formsWrapper = this.getContent().querySelector('.display__forms-wrapper') as HTMLElement;

    const changeAvatarButton = this.getContent().querySelector('.display__change-avatar') as HTMLButtonElement;
    const addUserButton = this.getContent().querySelector('.display__add-user') as HTMLButtonElement;
    const deleteUserButton = this.getContent().querySelector('.display__delete-user') as HTMLButtonElement;
    const deleteChatButton = this.getContent().querySelector('.display__delete-chat') as HTMLButtonElement;

    const changeAvatarWrapper = this.getContent().querySelector('.display__change-avatar-wrapper') as HTMLElement;
    const addUserWrapper = this.getContent().querySelector('.display__add-user-list-wrapper') as HTMLElement;
    const deleteUserWrapper = this.getContent().querySelector('.display__delete-user-list-wrapper') as HTMLElement;
    const deleteChatWrapper = this.getContent().querySelector('.display__delete-chat-wrapper') as HTMLElement;

    // const changeAvatarInput = changeAvatarWrapper.querySelector('input') as HTMLInputElement;
    const addUserInput = addUserWrapper.querySelector('input') as HTMLInputElement;
    const deleteUserInput = deleteUserWrapper.querySelector('input') as HTMLInputElement;

    // const changeAvatarSubmit = changeAvatarWrapper.querySelector('button') as HTMLButtonElement;
    const addUserSubmit = addUserWrapper.querySelector('button') as HTMLButtonElement;
    const deleteUserSubmit = deleteUserWrapper.querySelector('button') as HTMLButtonElement;
    const deleteChatAgree = deleteChatWrapper.querySelector('.change-data-form__answer_yes') as HTMLButtonElement;
    const deleteChatDisagree = deleteChatWrapper.querySelector('.change-data-form__answer_no') as HTMLButtonElement;

    const messageInput = this.getContent().querySelector('.display__send-message') as HTMLInputElement;
    const sendButton = this.getContent().querySelector('.display__send-button') as HTMLButtonElement;

    let activeWrapper: HTMLElement | null = null;

    const openWrapper = (element: HTMLElement) => {
      activeWrapper = element;
      formsWrapper.classList.add('display__forms-wrapper_show');
      element.classList.add('change-data-form_show');
      settingsList.classList.toggle('display__settings-list_open');
    }

    // const sendData = (input: HTMLInputElement) => {

    // }

    changeAvatarButton.addEventListener('click', () => { openWrapper(changeAvatarWrapper) })
    deleteUserButton.addEventListener('click', () => { openWrapper(deleteUserWrapper) })
    deleteChatButton.addEventListener('click', () => { openWrapper(deleteChatWrapper) })
    addUserButton.addEventListener('click', () => { openWrapper(addUserWrapper) })

    // changeAvatarSubmit.addEventListener('click', () => {
    //   ChatsController.changeAvatar(new FormData(input))
    // })

    addUserSubmit.addEventListener('click', () => {
      ChatsController.addUser(addUserInput.value, this.props.chatId).then(() => {
        formsWrapper.classList.remove('display__forms-wrapper_show');
        activeWrapper?.classList.remove('change-data-form_show');
      })
    })
    deleteUserSubmit.addEventListener('click', () => {
      ChatsController.deleteUser(deleteUserInput.value, this.props.chatId).then(() => {
        formsWrapper.classList.remove('display__forms-wrapper_show');
        activeWrapper?.classList.remove('change-data-form_show');
      })
    })

    deleteChatAgree.addEventListener('click', () => { ChatsController.deleteChat(this) })
    deleteChatDisagree.addEventListener('click', () => {
      formsWrapper.classList.remove('display__forms-wrapper_show');
      activeWrapper?.classList.remove('change-data-form_show');
    })

    formsWrapper.addEventListener('click', (e: Event) => {
      if ((e.target as HTMLElement).classList.contains('display__forms-wrapper')) {
        formsWrapper.classList.remove('display__forms-wrapper_show');
        activeWrapper?.classList.remove('change-data-form_show');
      }
    })

    sendButton.addEventListener('click', () => {
      ChatsController.sendMessage(messageInput, this)
    })

    settingsButton.addEventListener('click', () => {
      settingsList.classList.toggle('display__settings-list_open');
    })
  }
}
