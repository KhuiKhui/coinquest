import type { Meta, StoryObj } from '@storybook/react';

import RCBoard from './RCBoard';

const meta: Meta<typeof RCBoard> = {
  component: RCBoard,
  args: {
    suggestions: [
      {
        content: 'Stocks',
        question: 'What are the best stocks to buy?',
      },
      {
        content: 'Loans',
        question: 'How to manage loans?',
      },
      {
        content: 'Debt',
        question: 'How to avoid getting into debt?',
      },
      {
        content: 'Student spending',
        question: 'How should I financially plan my future as a student?',
      },
      {
        content: 'Banks',
        question: 'How do banks work?',
      },
    ],
    className: '',
  },
};

export default meta;
type Story = StoryObj<typeof RCBoard>;

export const Primary: Story = {};
