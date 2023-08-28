import CustomLink from "../components/custom-link/custom-link";
import ChatDisplay from "../components/chat-display/chat-display";
import Router from "../services/router";

const chatDisplay = new ChatDisplay({
  personImage: '',
  personName: '',
  messages: [],
});

const chatInitData = {
  personName: 'Пётр',
  chat: chatDisplay,
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
          Router.go('/settings');
        }
      }
    }
  }),
};

export default chatInitData
