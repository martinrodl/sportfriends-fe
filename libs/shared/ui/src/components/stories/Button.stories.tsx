import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    children: 'Heading',
    className: 'mt-[36px] md:mt-[110px] text-white w-full min-h-[60px]',
    type: 'submit',
    onClick: () => {},
  },
};

export const Heading: Story = {
  args: {
    children: 'Heading',
    className: 'mt-[36px] md:mt-[110px] text-white w-full min-h-[60px]',
    type: 'submit',
    onClick: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Button!/gi)).toBeTruthy();
  },
};
