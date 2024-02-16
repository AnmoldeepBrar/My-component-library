import React from 'react';
import { Story } from '@storybook/react';

import TableHeader from './TableHeader';

export default {
  title: 'Table/Header',
  component: TableHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

const Template: Story = (args) => <TableHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Header',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Header',
  disabled: true,
};
