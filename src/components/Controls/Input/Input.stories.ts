
import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    placeholder: "Enter your question...",
    className: ""
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {};