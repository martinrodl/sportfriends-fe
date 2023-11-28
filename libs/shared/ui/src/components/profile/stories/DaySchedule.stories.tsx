import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import DaySchedule from '../schedule/DaySchedule';
import { faker } from '@faker-js/faker';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof DaySchedule> = {
  component: DaySchedule,
  title: 'Day Schedule',
};
export default meta;

type Story = StoryObj<typeof DaySchedule>;

const event = {
  id: '1',
  title: 'Math',
  startTime: '12:00',
};

export const Default = {
  args: {
    events: [event,event],
  },
};

export const Full = {
  args: {
    events: [event,event,event,event],
  },
};

export const Empty = {
  args: {
    events: [],
  },
};
