import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { Checkbox } from "./Checkbox";
import { useState } from "react";

const meta = {
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * uses useArgs API to implement togglable checkbox
 */
export const UseArgsStory: Story = {
  args: {
    isChecked: false,
  },
  render: UseArgsRender,
};

/**
 * uses useState API to implement togglable checkbox
 */
export const UseStateStory: Story = {
  args: {
    isChecked: false,
  },
  render: UseStateRender,
};

function UseArgsRender(args: any) {
  const [{ isChecked }, updateArgs] = useArgs();

  function onChange() {
    updateArgs({ isChecked: !isChecked });
  }

  return <Checkbox {...args} onChange={onChange} isChecked={isChecked} />;
}

function UseStateRender({ isChecked: _isChecked }: { isChecked: boolean }) {
  const [{ isChecked }, setIsChecked] = useState({ isChecked: _isChecked });
  function onChange() {
    setIsChecked({ isChecked: !isChecked });
  }
  return <Checkbox onChange={onChange} isChecked={isChecked} />;
}
