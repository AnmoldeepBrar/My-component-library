import React from 'react';
import { Story, Meta } from '@storybook/react';

import TableCell, { TableCellProps } from './TableCell';

export default {
  title: 'Table/TableCell',
  component: TableCell,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TableCellProps> = (args) => <TableCell {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Cell Content',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Cell',
  disabled: true,
};
