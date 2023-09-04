import ChatsAPI from "../api/chat-api";
import MessageBlock from "../components/message/message";
import ChatDisplay from "../components/chat-display/chat-display";
import store, { StoreEvents } from "../services/store";
import { chatType, Indexed, messageType } from "../services/types";
import timeMessage from "../utils/timeLastMessage";

class ChatsController {
  static createChat(input: HTMLInputElement) {
    ChatsAPI.createChat({ 'title': input.value }).then(() => {
      ChatsAPI.getChats().then((response) => {
        store.set('chats', response, StoreEvents.UpdatedChats);
      }).catch((err) => {
        console.error(err)
      })
    }).catch((err) => {
      console.error(err)
    })
  }

  static deleteChat(chatDisplay: ChatDisplay) {
    const chatId = chatDisplay.props.chatId;
    const socket = chatDisplay.props.socket;

    ChatsAPI.deleteChat({ 'chatId': chatId }).then(() => {
      ChatsAPI.getChats().then((response) => {
        socket.close();
        store.set('chats', response, StoreEvents.UpdatedChats);
        chatDisplay.setProps({
          attributes: { class: '' }
        })
      }).catch((err) => {
        console.error(err)
      })
    }).catch((err) => {
      console.error(err)
    })
  }

  static openChat(chat: chatType, chatDisplay: ChatDisplay, data: Indexed, avatar: string) {
    const userId = data.user.id;
    const chatId = chat.id;

    ChatsAPI.getToken(chatId).then(response => {
      const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${(response as Indexed).token}`);
      let pingInterval: NodeJS.Timeout;

      socket.addEventListener('open', () => {
        socket.send(JSON.stringify({
          content: '0',
          type: 'get old',
        }));

        pingInterval = setInterval(() => {
          socket.send(JSON.stringify({
            type: 'ping',
          }))
        }, 30000);
      });

      socket.addEventListener('close', event => {
        clearInterval(pingInterval);
        console.log(`Код: ${event.code} | Причина: ${event.reason}`);
      });

      socket.addEventListener('message', event => {
        const data = JSON.parse(event.data);

        if (data.type != 'pong' && data.type != 'user connected' && Array.isArray(data)) {
          const messagesInfo: messageType[] = data;
          const messagesBlocks: MessageBlock[] = [];

          for (const message of messagesInfo) {
            const time = timeMessage(message.time);
            const position = userId != message.user_id ? 'left' : 'right'
            const messageBlock = new MessageBlock({
              text: message.content,
              time: time,
              status: message.is_read ? 'readed' : 'read',
              position: position,
              attributes: { class: `message_${position}` }
            })

            messagesBlocks.push(messageBlock)
          }

          chatDisplay.setPropsChildren({
            socket: socket,
            chatId: chat.id,
            personImage: avatar,
            personName: chat.title,
            attributes: { class: 'display_show' }
          }, { messages: messagesBlocks })

        } else if (data.type != 'pong' && data.type != 'user connected' && !Array.isArray(data)) {
          socket.send(JSON.stringify({
            content: '0',
            type: 'get old',
          }))
        }
      });

      socket.addEventListener('error', event => {
        console.log('Ошибка', event);
      });
    }).catch((err) => {
      console.error(err)
    })
  }

  static addUser(user: string, chatId: number, formsWrapper: HTMLElement, activeWrapper: HTMLElement | null) {
    const data = {
      users: [user],
      chatId: chatId
    }

    ChatsAPI.addUsersToChat(data).then(() => {
      formsWrapper.classList.remove('display__forms-wrapper_show');
      activeWrapper?.classList.remove('change-data-form_show');
    }).catch((err) => {
      console.error(err)
    })
  }

  static deleteUser(user: string, chatId: number, formsWrapper: HTMLElement, activeWrapper: HTMLElement | null) {
    const data = {
      users: [user],
      chatId: chatId
    }

    ChatsAPI.deleteUsersFromChat(data).then(() => {
      formsWrapper.classList.remove('display__forms-wrapper_show');
      activeWrapper?.classList.remove('change-data-form_show');
    }).catch((err) => {
      console.error(err)
    })
  }

  // static changeAvatar(data: FormData) {
  // ChatsAPI.changeChatAvatar(data).then(() => {

  // })
  // }

  static sendMessage(messageInput: HTMLInputElement, context: ChatDisplay) {
    if (messageInput.value != '') {
      const socket = context.props.socket;
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
  }
}

export default ChatsController
