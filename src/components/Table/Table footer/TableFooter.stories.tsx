import React from 'react';
import { Story, Meta } from '@storybook/react';

import TableFooter, { TableFooterProps } from './TableFooter';

export default {
  title: 'Table/TableFooter',
  component: TableFooter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TableFooterProps> = (args) => <TableFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Footer Content',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Footer',
  disabled: true,
};
