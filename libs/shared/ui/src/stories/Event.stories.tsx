import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Event from '../components/events/Event';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Event> = {
  component: Event,
  title: 'Event',
};
export default meta;
type Story = StoryObj<typeof Event>;

export const Primary = {
  args: {
    event: {
      id: '1',
      title: 'Heading',
      participants: [],
      sport: 'Football',
      timeEnd: '2021-10-15T15:00:00.000Z',
      timeStart: '2021-10-15T14:00:00.000Z',
      address: 'Address',
      outdoor: true,
    },
    slug: 'slug',
  },
};
