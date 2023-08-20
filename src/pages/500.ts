import CustomLink from "../components/custom-link/custom-link";
import Page500 from "../pages-block/500/500";
import Router from "../services/router";

const router = new Router('.app');

const page = new Page500({
  customLink: new CustomLink({
    text: 'Список чатов',
    attributes: {
      type: 'button',
      class: 'content-500__back',
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
