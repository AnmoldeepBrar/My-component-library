import React from 'react';
import { Story, Meta } from '@storybook/react';

import TableRow, { TableRowProps } from './TableRow';

export default {
  title: 'Table/TableRow',
  component: TableRow,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TableRowProps> = (args) => <TableRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Row Content',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Row',
  disabled: true,
};
