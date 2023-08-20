// import Dialog from "../components/dialog/dialog";
// import Message from "../components/message/message";
import CustomLink from "../components/custom-link/custom-link";
import ChatsPage from "../pages-block/chats/chats";
import { message } from "../utils/regular-expressions";
import Router from "../services/router";

const router = new Router('.app');
const imageUrl = new URL('../../../static/icons/person.svg', import.meta.url).href;

// console.log(imageUrl)

// const dialog1 = new Dialog({
//   image: imageUrl,
//   name: 'Андрей',
//   lastMessage: 'Изображение',
//   date: '10:49',
//   count: '2',
//   attributes: {
//     class: 'dialog',
//   },
// })

// const dialog2 = new Dialog({
//   image: imageUrl,
//   name: 'Пётр',
//   lastMessage: 'Когда сможешь вернуть ?',
//   date: 'Ср',
//   count: '0',
//   attributes: {
//     class: 'dialog',
//   },
// })

// const dialog3 = new Dialog({
//   image: imageUrl,
//   name: 'Афанасий',
//   lastMessage: 'Видео',
//   date: 'Пт',
//   count: '1',
//   attributes: {
//     class: 'dialog',
//   },
// })

// const message1 = new Message({
//   text: 'Привет, можешь одолжить 100 рублей ?',
//   time: '10:12',
//   status: 'read',
//   position: 'left',
//   attributes: {
//     class: 'message message_left',
//   },
// })

// const message2 = new Message({
//   text: 'Да, хорошо, скинул',
//   time: '11:50',
//   status: 'readed',
//   position: 'right',
//   attributes: {
//     class: 'message message_right',
//   },
// })

// const message3 = new Message({
//   text: 'Когда сможешь вернуть ?',
//   time: '11:56',
//   status: 'read',
//   position: 'right',
//   attributes: {
//     class: 'message message_right',
//   },
// })

const page = new ChatsPage({
  personImage: imageUrl,
  personName: 'Пётр',
  customLink: new CustomLink({
    text: 'Профиль',
    attributes: {
      type: 'button',
      class: 'chats__profile',
      link: '/settings',
    },
    events: {
      click: {
        element: '',
        event: () => {
          router.go('/settings');
        }
      }
    }
  }),
});

const messageInput = page.getContent().querySelector('.chats__send-message') as HTMLInputElement;
const sendButton = page.getContent().querySelector('.chats__send-button');

sendButton?.addEventListener('click', () => {
  if (!message.test(messageInput.value)) {
    const output = { 'message': messageInput.value };

    console.log(output)
  }
})

export default page
