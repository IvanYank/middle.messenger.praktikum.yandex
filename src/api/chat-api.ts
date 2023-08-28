import HTTPTransport from "../services/fetch"

export default class ChatsAPI {
  static createChat(data: object){
    return HTTPTransport.post('chats', {
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static deleteChat(data: object){
    return HTTPTransport.delete(`chats`, {
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static getChats(url: string = ''){
    return HTTPTransport.get(`chats${url}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static addUsersToChat(data: object){
    return HTTPTransport.put(`chats/users`, {
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static deleteUsersFromChat(data: object){
    return HTTPTransport.delete(`chats/users`, {
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }


  static getToken(id: number){
    return HTTPTransport.post(`chats/token/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static changeChatAvatar(data: FormData){
    return HTTPTransport.put(`chats/avatar`, {
      data: data,
    })
  }
}
