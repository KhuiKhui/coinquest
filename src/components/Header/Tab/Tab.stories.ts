
import type { Meta, StoryObj } from '@storybook/react';

import Tab from './Tab';
const meta: Meta<typeof Tab> = {
  component: Tab,
  args: {
    content: "Testing",
    className: ""
  }
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Primary: Story = {};