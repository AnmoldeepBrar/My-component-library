import React from 'react';
import { Story, Meta } from '@storybook/react';
import Table, { TableProps } from './Table';

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    ['Name', 'Age', 'Country'],
    ['John Doe', 30, 'USA'],
    ['Jane Smith', 25, 'Canada'],
    ['Alice Johnson', 35, 'UK'],
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  data: [
    ['Name', 'Age', 'Country'],
    ['John Doe', 30, 'USA'],
    ['Jane Smith', 25, 'Canada'],
    ['Alice Johnson', 35, 'UK'],
  ],
  disabled: true,
};
