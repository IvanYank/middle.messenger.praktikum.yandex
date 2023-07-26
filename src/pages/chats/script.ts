import Dialog from '../../components/dialog/dialog';
import Message from '../../components/message/message';
import multiRender from '../../utils/multi-render';
import {message} from '../../utils/regular-expressions';

document.addEventListener('DOMContentLoaded', ()=>{
  const imageUrl = new URL('../../../static/icons/person.svg', import.meta.url).href;
  const messageInput = document.querySelector('.chats__send-message') as HTMLInputElement;
  const sendButton = document.querySelector('.chats__send-button');

  const dialog1 = new Dialog({
    image: imageUrl,
    name: 'Андрей',
    lastMessage: 'Изображение',
    date: '10:49',
    count: '2',
    attributes: {
      class: 'dialog',
    },
  })

  const dialog2 = new Dialog({
    image: imageUrl,
    name: 'Пётр',
    lastMessage: 'Когда сможешь вернуть ?',
    date: 'Ср',
    count: '0',
    attributes: {
      class: 'dialog',
    },
  })

  const dialog3 = new Dialog({
    image: imageUrl,
    name: 'Афанасий',
    lastMessage: 'Видео',
    date: 'Пт',
    count: '1',
    attributes: {
      class: 'dialog',
    },
  })

  const message1 = new Message({
    text: 'Привет, можешь одолжить 100 рублей ?',
    time: '10:12',
    status: 'read',
    position: 'left',
    attributes: {
      class: 'message message_left',
    },
  })

  const message2 = new Message({
    text: 'Да, хорошо, скинул',
    time: '11:50',
    status: 'readed',
    position: 'right',
    attributes: {
      class: 'message message_right',
    },
  })

  const message3 = new Message({
    text: 'Когда сможешь вернуть ?',
    time: '11:56',
    status: 'read',
    position: 'right',
    attributes: {
      class: 'message message_right',
    },
  })

  const dialogs: Dialog[] = [dialog1, dialog2, dialog3];
  const messages: Message[] = [message1, message2, message3];

  const obj = {
    '.chats__list': dialogs,
    '.chats__messages-display': messages,
  };

  sendButton?.addEventListener('click', ()=>{
    if(!message.test(messageInput.value)){
      const output = {'message': messageInput.value};

      console.log(output)
    }
  })

  multiRender(obj);
});
