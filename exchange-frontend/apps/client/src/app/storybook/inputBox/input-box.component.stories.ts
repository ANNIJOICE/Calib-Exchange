import { InputBoxComponent } from './input-box.component';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
const meta: Meta<InputBoxComponent> = {
  title: 'Angular material/Input',
  component: InputBoxComponent,
  tags: ['autodocs'],

  render: (args: InputBoxComponent) => ({
    props: {
      backgroundcolor: null,
      ...args
    },
    argTypes: {
      backgroundColor: {
        control: 'color'
      }
    }
  })
};

export default meta;
type Story = StoryObj<InputBoxComponent>;

export const Empty: Story = {
  args: {}
};

export const defaultValue: Story = {
  args: {
    value: 'This is defult value',
    className: 'button',
    placeholder: 'Enter value'
  }
};
