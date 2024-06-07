import { Meta, StoryObj } from "@storybook/react";

import Icon from "../components/Icon";

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const MenuIcon: Story = {
  render: () => (
    <Icon size="lg" variant="outlined">
      home
    </Icon>
  ),
};
