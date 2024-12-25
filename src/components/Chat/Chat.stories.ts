import type { Meta, StoryObj } from '@storybook/react';

import Chat from '.';
const meta: Meta<typeof Chat> = {
  component: Chat,
  args: {
    conversation: [
      {
        avatar: 'https://picsum.photos/200',
        msgContent:
          'My name is FinBot. I am here to help you with your financial queries.',
        role: 'FINBOT',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Chat>;

export const Primary: Story = {};
