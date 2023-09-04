import HTTPTransport from "../services/fetch"

const fetch = new HTTPTransport();

export default class ChatsAPI {
  static createChat(data: object){
    return fetch.post('chats', {
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static deleteChat(data: object){
    return fetch.delete(`chats`, {
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static getChats(url: string = ''){
    return fetch.get(`chats${url}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static addUsersToChat(data: object){
    return fetch.put(`chats/users`, {
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static deleteUsersFromChat(data: object){
    return fetch.delete(`chats/users`, {
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }


  static getToken(id: number){
    return fetch.post(`chats/token/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static changeChatAvatar(data: FormData){
    return fetch.put(`chats/avatar`, {
      data: data,
    })
  }
}
