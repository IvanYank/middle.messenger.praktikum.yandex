import CustomLink from "../components/custom-link/custom-link";
import Router from "../services/router";

const page500InitData = {
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
          Router.go('/messenger');
        }
      }
    }
  }),
};

export default page500InitData
