import React from 'react';
import { Homepage } from './Homepage';

export default {
  title: 'Example/Homepage',
  component: Homepage,
};

const Template = (args) => <Homepage {...args} />;

export const Regular = Template.bind({});
Regular.args = {};