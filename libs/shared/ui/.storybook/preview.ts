import { withRouter } from 'storybook-addon-react-router-v6';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';
import './style.css';

export default {
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { userId: '42' },
      },
      routing: { path: '/users/:userId' },
    }),
  },
};
