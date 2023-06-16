

import { CardComponent } from './card.component';
import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<CardComponent> = {
  title: 'Card',
  component: CardComponent,
  tags: ['autodocs'],
  render: (args: CardComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  })
};

export default meta;
type Story = StoryObj<CardComponent>;


export const Empty: Story = {
    args: {},
};

export const WithTitle: Story = {
    args: {
        title: 'Hello card!',
    }
};

export const WithTitleAndSubtitle: Story = {
    args: {
        title: 'Hello card!',
        subtitle: 'Well hello there 👋',
    }
};
export const WithAction: Story = {
    args: {
        title: 'A card...',
        subtitle: 'Waiting to be clicked-on',
    }
};
export const WithNotes: Story = {
    args: {}
};

WithNotes.parameters = {
  notes: 'Just a few notes about this story...',
};
