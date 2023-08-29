import UserAPI from "../api/user-api";
import ChatsAPI from "../api/chat-api";
import Input from "../components/input/input";
import Router from "../services/router";
import store, { StoreEvents } from "../services/store";
import setCookie from "../utils/setCookie";
import getCookie from "../utils/getCookie";
import router from "../services/router";

class LoginController {
  static signIn(inputs: Input[]) {
    const passes: boolean[] = [];
    const info: Record<string, string> = {};

    inputs.forEach((block) => {
      const input: HTMLInputElement | null = block.getContent().querySelector('input') as HTMLInputElement;
      const error: HTMLElement | null = block.getContent().querySelector('p');
      const name = input.getAttribute('name') as string;

      input.dispatchEvent(new Event('blur'));
      error?.classList.contains('form__error_active') ? passes.push(false) : passes.push(true);

      info[name] = input.value;
    })

    if (!passes.includes(false)) {
      UserAPI.signIn(info)
        .then(() => {
          UserAPI.getUser().then((response) => {
            store.set('user', response, StoreEvents.UpdatedProfile)
            ChatsAPI.getChats().then((response) => {
              store.set('chats', response, StoreEvents.UpdatedChats);
              if(!getCookie('auth')){
                setCookie('auth', 'true');
              }
              Router.go('/messenger');
            }).catch((err) => {
              console.error(err);
            })
          }).catch((err) => {
            console.error(err);
          })
        })
        .catch((err) => {
          switch (err.reason) {
            case 'User already in system':
              UserAPI.getUser().then((response) => {
                store.set('user', response, StoreEvents.UpdatedProfile)
                ChatsAPI.getChats().then((response) => {
                  store.set('chats', response, StoreEvents.UpdatedChats);
                  if(!getCookie('auth')){
                    setCookie('auth', 'true');
                  }
                  Router.go('/messenger');
                }).catch((err) => {
                  console.error(err);
                })
              }).catch((err) => {
                console.error(err);
              });
              break;
            default:
              console.error(err);
              break;
          }
        })
    }
  }

  static getData(){
    UserAPI.getUser().then((response) => {
      store.set('user', response, StoreEvents.UpdatedProfile)
      ChatsAPI.getChats().then((response) => {
        store.set('chats', response, StoreEvents.UpdatedChats);
        router.start();
      }).catch((err) => {
        console.error(err);
      })
    }).catch((err) => {
      console.error(err);
    })
  }
}

export default LoginController
