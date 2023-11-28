import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Review from '../review/Review';
import { faker } from '@faker-js/faker';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Review> = {
  component: Review,
  title: 'Review',
};
export default meta;

type Story = StoryObj<typeof Review>;

export const Default = {
  args: {
    rating: faker.datatype.number({ min: 1, max: 5 }),
    name: faker.person.firstName(),
    imgUrl: faker.image.avatar(),
    review: faker.lorem.paragraph(),
    date: faker.date.recent().toLocaleDateString(),
  },
  decorators: [(story) => <div style={{ width: '520px' }}>{story()} </div>],
};

export const WithoutProfileImg = {
  args: {
    rating: faker.datatype.number({ min: 1, max: 5 }),
    name: faker.person.firstName(),
    review: faker.lorem.paragraph(),
    date: faker.date.recent().toLocaleDateString(),
  },
  decorators: [(story) => <div style={{ width: '520px' }}>{story()} </div>],
};
