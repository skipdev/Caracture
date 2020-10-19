import React from 'react';
import { Intro } from './Intro';

export default {
  title: 'Example/Intro',
  component: Intro,
};

const Template = (args) => <Intro {...args} />;

export const Regular = Template.bind({});
Regular.args = {};