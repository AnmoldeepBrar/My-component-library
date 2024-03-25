import React from "react";
import { Story, Meta } from "@storybook/react";
import Label, { LabelProps } from "./Label";

export default {
  title: "Label",
  component: Label,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "This section is Label", // You can specify the text here
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled Label",
  disabled: true,
};
