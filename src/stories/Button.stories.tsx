import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Outlined: Story = {
  render: () => (
    <Button variant="outlined" color="amber">
      Submit
    </Button>
  ),
};

export const Filled: Story = {
  render: () => (
    <Button variant="filled" color="amber">
      Submit
    </Button>
  ),
};
