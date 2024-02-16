import React from 'react';
import { Story, Meta } from '@storybook/react';
import HeroImage, { HeroImageProps } from './HeroImage';

export default {
  title: 'HeroImage',
  component: HeroImage,
} as Meta;

const Template: Story<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/600x400',
  alt: 'Placeholder Image',
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/600x400',
  alt: 'Placeholder Image',
  disabled: true,
};
