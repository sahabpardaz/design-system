import { ComponentStory, ComponentMeta } from '@storybook/react';

const Colors = () => {
  return <h1>Colors</h1>;
};

export default {
  component: Colors,
  title: 'Design Tokens/Colors',
} as ComponentMeta<typeof Colors>;

const Template: ComponentStory<typeof Colors> = () => <Colors />;

export const Primary = Template.bind({});
Primary.args = {};
