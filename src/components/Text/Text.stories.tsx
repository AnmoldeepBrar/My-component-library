import React from 'react';
import { Story, Meta } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'This is some text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: 'This is disabled text',
  disabled: true,
};
