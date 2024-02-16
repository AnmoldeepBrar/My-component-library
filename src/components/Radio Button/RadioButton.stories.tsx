import React from 'react';
import { Story, Meta } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
  title: 'RadioButton',
  component: RadioButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Option 1',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Option 2',
  disabled: true,
};
