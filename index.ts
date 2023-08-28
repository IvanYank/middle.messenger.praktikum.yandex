import loginInitData from './src/pages/login';
import registrationInitData from './src/pages/registration';
import page404InitData from './src/pages/404';
import page500InitData from './src/pages/500';
import LoginPage from './src/pages-block/login/login';
import RegistrationPage from './src/pages-block/registration/registration';
import Page404 from './src/pages-block/404/404';
import Page500 from './src/pages-block/500/500';
import router from './src/services/router';
import createPage from './src/utils/createPage';

document.addEventListener('DOMContentLoaded', () => {
  router
    .use('/', createPage(LoginPage, loginInitData))
    .use('/sign-up', createPage(RegistrationPage, registrationInitData))
    .use('/404', createPage(Page404, page404InitData))
    .use('/500', createPage(Page500, page500InitData))
    .start();
});
