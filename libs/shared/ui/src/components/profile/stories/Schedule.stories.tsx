import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Schedule from '../schedule/Schedule';
import { faker } from '@faker-js/faker';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const event = {
  id: '1',
  title: 'Math',
  startTime: '12:00',
};

const meta: Meta<typeof Schedule> = {
  component: Schedule,
  title: 'Schedule',
};
export default meta;

type Story = StoryObj<typeof Schedule>;

export const Default = {
  args: {
    events: [event, event],
  },
};
