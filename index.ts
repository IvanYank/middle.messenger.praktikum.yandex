import loginInitData from './src/pages/login';
import registrationInitData from './src/pages/registration';
import profileInitData from './src/pages/profile';
import chatInitData from './src/pages/chats';
import page404InitData from './src/pages/404';
import page500InitData from './src/pages/500';
import LoginPage from './src/pages-block/login/login';
import RegistrationPage from './src/pages-block/registration/registration';
import ChatsPage from './src/pages-block/chats/chats';
import ProfilePage from './src/pages-block/profile/profile';
import Page404 from './src/pages-block/404/404';
import Page500 from './src/pages-block/500/500';
import router from './src/services/router';
import createPage from './src/utils/createPage';
import getCookie from './src/utils/getCookie';
import LoginController from './src/controllers/login-controller';

document.addEventListener('DOMContentLoaded', () => {
  router
    .use('/', createPage(LoginPage, loginInitData))
    .use('/sign-up', createPage(RegistrationPage, registrationInitData))
    .use('/messenger', createPage(ChatsPage, chatInitData))
    .use('/settings', createPage(ProfilePage, profileInitData))
    .use('/404', createPage(Page404, page404InitData))
    .use('/500', createPage(Page500, page500InitData))
    .start();

    if(getCookie('auth')){
      LoginController.getData()
    }
});
