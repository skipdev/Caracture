import React from 'react';
import { MultipleLogoBanner } from './MultipleLogoBanner';

export default {
  title: 'Example/MultipleLogoBanner',
  component: MultipleLogoBanner,
};

const Template = (args) => <MultipleLogoBanner {...args} />;

export const Companies = Template.bind({});
Companies.args = {type: 'companies'};

export const Brands = Template.bind({});
Brands.args = {type: 'brands'};
