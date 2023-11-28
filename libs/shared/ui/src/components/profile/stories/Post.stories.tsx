import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Post from '../posts/Post';
import { faker } from '@faker-js/faker';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Post> = {
  component: Post,
  title: 'Post',
};
export default meta;

type Story = StoryObj<typeof Post>;

export const Default = {
  args: {
    events: [event, event],
  },
};
