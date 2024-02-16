// Card.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card, { CardProps } from './Card';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} onclick={action('clicked')} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Card',
  content: 'This is the default card content. I wish you Good Luck.',
  onclick: action('clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Card',
  content: 'This card is disabled. Oh! Sorry.',
  disabled: true,
};
