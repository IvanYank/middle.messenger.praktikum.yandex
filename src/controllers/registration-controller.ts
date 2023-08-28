import UserAPI from "../api/user-api";
import ChatsAPI from "../api/chat-api";
import Input from "../components/input/input";
import ProfilePage from "../pages-block/profile/profile";
import ChatsPage from "../pages-block/chats/chats";
import createPage from "../utils/createPage";
import chats from '../../src/pages/chats'
import profile from '../../src/pages/profile'
import Router from "../services/router";
import store, { StoreEvents } from "../services/store";

class RegistrationController {
  static signUp(inputs: Input[]) {
    const passes: boolean[] = [];
    const info: Record<string, string> = {};

    inputs.forEach((block) => {
      const input = block.getContent().querySelector('input') as HTMLInputElement;
      const name = input.getAttribute('name') as string;
      const error: HTMLElement | null = block.getContent().querySelector('p');

      input?.dispatchEvent(new Event('blur'))
      error?.classList.contains('form__error_active') ? passes.push(false) : passes.push(true);

      info[name] = input.value;
    })

    if (!passes.includes(false)) {
      UserAPI.signUp(info)
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
          console.log(err)
        })
    }
  }
}

export default RegistrationController
