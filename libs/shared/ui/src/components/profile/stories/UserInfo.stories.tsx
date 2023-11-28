import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import UserInfo from '../userinfo/UserInfo';
import { faker } from '@faker-js/faker';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof UserInfo> = {
  component: UserInfo,
  title: 'User Info',
};
export default meta;

type Story = StoryObj<typeof UserInfo>;

export const Default = {
  args: {},
  //   decorators: [(story) => <div style={{ display: 'flex' }}>{story()} </div>],
};
