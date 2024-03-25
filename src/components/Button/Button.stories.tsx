// button.stories.tsx
import React from "react";
import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "./Button"; // Import ButtonProps from Button.types

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />; // Specify ButtonProps as the type of args

export const Default = Template.bind({});
Default.args = {
  text: "Click me",
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled Button",
  disabled: true,
};
