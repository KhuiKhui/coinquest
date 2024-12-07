
import type { Meta, StoryObj } from '@storybook/react';

import RCBoard from './RCBoard';

const meta: Meta<typeof RCBoard> = {
  component: RCBoard,
  args: {
    length: 5,
    className: ""
  }
};

export default meta;
type Story = StoryObj<typeof RCBoard>;

export const Primary: Story = {};