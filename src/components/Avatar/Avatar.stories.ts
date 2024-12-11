import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  args: {
    image: 'https://picsum.photos/200',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {};
