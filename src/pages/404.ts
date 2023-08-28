import CustomLink from "../components/custom-link/custom-link";
import Router from "../services/router";

const page404InitData = {
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
          Router.go('/messenger');
        }
      }
    }
  }),
};

export default page404InitData
