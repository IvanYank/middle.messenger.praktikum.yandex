import HTTPTransport from "../services/fetch";

export default class UserAPI {
  static signUp(data: object) {
    return HTTPTransport.post('auth/signup', {
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static signIn(data: object) {
    return HTTPTransport.post('auth/signin', {
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static getUser() {
    return HTTPTransport.get('auth/user', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static changeData(data: object){
    return HTTPTransport.put('user/profile', {
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static changePass(data: object){
    return HTTPTransport.put('user/password', {
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static changeAvatar(data: FormData){
    return HTTPTransport.put('user/profile/avatar', {
      data: data,
    })
  }

  static logOut(){
    return HTTPTransport.post('auth/logout', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }
}
