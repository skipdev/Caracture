import React from 'react';
import { WhiteTransition } from './WhiteTransition';

export default {
  title: 'Example/WhiteTransition',
  component: WhiteTransition,
};

const Template = (args) => <WhiteTransition {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  upsideDown: false
};
export const UpsideDown = Template.bind({});
UpsideDown.args = {
  upsideDown: true
};