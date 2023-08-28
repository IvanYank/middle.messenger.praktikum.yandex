import UserAPI from "../api/user-api";
import ChatsAPI from "../api/chat-api";
import Input from "../components/input/input";
import ChatsPage from "../pages-block/chats/chats";
import ProfilePage from "../pages-block/profile/profile";
import chats from '../../src/pages/chats'
import profile from '../../src/pages/profile'
import Router from "../services/router";
import createPage from "../utils/createPage";
import store, { StoreEvents } from "../services/store";

class LoginController {
  static signIn(inputs: Input[]) {
    const passes: boolean[] = [];
    const info: Record<string, string> = {};

    inputs.forEach((block) => {
      const input: HTMLInputElement | null = block.getContent().querySelector('input') as HTMLInputElement;
      const error: HTMLElement | null = block.getContent().querySelector('p');
      const name = input.getAttribute('name') as string;

      input.dispatchEvent(new Event('blur'))
      error?.classList.contains('form__error_active') ? passes.push(false) : passes.push(true);

      info[name] = input.value;
    })

    if (!passes.includes(false)) {
      UserAPI.signIn(info)
        .then(() => {
          UserAPI.getUser().then((response1) => {
            Router.use('/settings', createPage(ProfilePage, profile));
            store.set('user', JSON.parse(response1.response), StoreEvents.UpdatedProfile)
            ChatsAPI.getChats().then((response) => {
              Router.use('/messenger', createPage(ChatsPage, chats));
              store.set('chats', JSON.parse(response.response), StoreEvents.UpdatedChats);
              Router.go('/messenger');
            })
          })
        })
        .catch((err) => {
          console.error(JSON.parse(err).reason)
          if (JSON.parse(err).reason == 'User already in system') {
            UserAPI.getUser().then((response1) => {
              Router.use('/settings', createPage(ProfilePage, profile));
              store.set('user', JSON.parse(response1.response), StoreEvents.UpdatedProfile)
              ChatsAPI.getChats().then((response) => {
                Router.use('/messenger', createPage(ChatsPage, chats));
                store.set('chats', JSON.parse(response.response), StoreEvents.UpdatedChats);
                Router.go('/messenger');
              })
            })
          }
        })
    }
  }
}

export default LoginController
