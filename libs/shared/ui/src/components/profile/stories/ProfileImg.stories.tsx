import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import ProfileImg from '../userinfo/ProfileImg';
import { faker } from '@faker-js/faker';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ProfileImg> = {
  component: ProfileImg,
  title: 'Profile Image',
};
export default meta;

type Story = StoryObj<typeof ProfileImg>;

export const Default = {
  args: {
    sizeMobile: 10,
    sizeDesktop: 100,
    rounded: true,
  },
  decorators: [
    (story) => <div style={{ width: '50px', height: '50px' }}>{story()} </div>,
  ],
};

export const NotRounded = {
  args: {
    sizeMobile: 10,
    sizeDesktop: 100,
    rounded: false,
  },
  decorators: [
    (story) => <div style={{ width: '50px', height: '50px' }}>{story()} </div>,
  ],
};

export const WithImgUrl = {
  args: {
    sizeMobile: 10,
    sizeDesktop: 20,
    imgUrl: faker.image.avatar(),
  },
};
