import type { Meta, StoryObj } from '@storybook/react';

import Home from './page';
const meta: Meta<typeof Home> = {
  component: Home,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Primary: Story = {};
