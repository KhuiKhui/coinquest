
import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  args: {
    content: 'Placeholder',
    className: '',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {};
