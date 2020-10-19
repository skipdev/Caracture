import React from 'react';
import { BlueBlock } from './BlueBlock';
import {Primary} from "./Button.stories";

export default {
  title: 'Example/BlueBlock',
  component: BlueBlock,
};

const Template = (args) => <BlueBlock {...args} />;

export const Regular = Template.bind({});
Primary.args = {
  children: <div><p>hi</p></div>,
};