import { ComponentStory, ComponentMeta } from '@storybook/react';

const Icons = () => {
  return <h1>Icons</h1>;
};

export default {
  component: Icons,
  title: 'Design Tokens/Icons',
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = () => <Icons />;

export const Primary = Template.bind({});
Primary.args = {};
