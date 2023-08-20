import login from './src/pages/login';
import registration from './src/pages/registration';
import chats from './src/pages/chats';
import profile from './src/pages/profile';
import page404 from './src/pages/404';
import page500 from './src/pages/500';
import Router from './src/services/router';

document.addEventListener('DOMContentLoaded', () => {
  const router = new Router('.app');

  router
    .use('/', login)
    .use('/sign-up', registration)
    .use('/messenger', chats)
    .use('/settings', profile)
    .use('/404', page404)
    .use('/500', page500)
    .start();
});
