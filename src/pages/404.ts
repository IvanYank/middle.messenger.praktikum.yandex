import CustomLink from "../components/custom-link/custom-link";
import Page404 from "../pages-block/404/404";
import Router from "../services/router";

const router = new Router('.app');

const page = new Page404({
  customLink: new CustomLink({
    text: 'Список чатов',
    attributes: {
      type: 'button',
      class: 'content-404__back',
      link: '/messenger',
    },
    events: {
      click: {
        element: '',
        event: () => {
          router.go('/messenger');
        }
      }
    }
  }),
});

export default page
