import type { Meta, StoryObj } from '@storybook/react';

import Chat from '.';
const meta: Meta<typeof Chat> = {
  component: Chat,
  args: {
    conversation: [
      {
        avatar: 'https://picsum.photos/200',
        msgContent: 'bla bla bla',
        role: 'FINBOT',
      },
      {
        avatar: 'https://picsum.photos/200',
        msgContent: 'bla bla bla',
        role: 'USER',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Chat>;

export const Primary: Story = {};
