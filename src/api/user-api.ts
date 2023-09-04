import HTTPTransport from "../services/fetch";

const fetch = new HTTPTransport();

export default class UserAPI {
  static signUp(data: object) {
    return fetch.post('auth/signup', {
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static signIn(data: object) {
    return fetch.post('auth/signin', {
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static getUser() {
    return fetch.get('auth/user', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static changeData(data: object){
    return fetch.put('user/profile', {
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static changePass(data: object){
    return fetch.put('user/password', {
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static changeAvatar(data: FormData){
    return fetch.put('user/profile/avatar', {
      data: data,
    })
  }

  static logOut(){
    return fetch.post('auth/logout', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }
}
