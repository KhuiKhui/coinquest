import type { Meta, StoryObj } from '@storybook/react';

import Chat from '.';
const meta: Meta<typeof Chat> = {
  component: Chat,
  args: {
    avatar: 'https://picsum.photos/200',
    content: 'bla bla bla bla bla',
  },
};

export default meta;
type Story = StoryObj<typeof Chat>;

export const Primary: Story = {};
