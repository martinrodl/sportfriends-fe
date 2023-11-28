import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import SportsInfo from '../userinfo/SportsInfo';
import { faker } from '@faker-js/faker';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SportsInfo> = {
  component: SportsInfo,
  title: 'Sports Info',
};
export default meta;

type Story = StoryObj<typeof SportsInfo>;

export const Default = {
  args: {
    sports: ['Soccer', 'Basketball', 'Tennis'],
  },
  decorators: [(story) => <div style={{ display: 'flex' }}>{story()} </div>],
};
