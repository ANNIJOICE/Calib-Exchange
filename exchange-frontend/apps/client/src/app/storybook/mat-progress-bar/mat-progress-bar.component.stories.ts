import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MatProgressBarComponent } from './mat-progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
const meta: Meta<MatProgressBarComponent> = {
  title: 'Angular Material/ Progressbar',
  component: MatProgressBarComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [MatProgressBarModule]
    })
  ],
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' }
    }
  }
};
export default meta;
type Story = StoryObj<MatProgressBarComponent>;

export const Empty: Story = {
  args: {}
};

export const Determinate: Story = {
  args: {
    mode: 'determinate',
    value: 35,
    color: 'accent'
  }
};

export const InDeterminate: Story = {
  args: {
    mode: 'indeterminate',
    value: 35,
    color: 'warn'
  }
};

export const buffer: Story = {
  args: {
    mode: 'buffer',
    value: 35,
    color: 'accent'
  }
};

export const query: Story = {
  args: {
    mode: 'query',
    value: 35,
    color: 'accent'
  }
};

//   const Template: Story<MatProgressBarComponent> = (args: MatProgressBarComponent) => ({
//     props: args,
//   });

//   export const Determinate = Template.bind({});
// Determinate.args = {
//   mode: 'determinate',
//   value: 35,
//   color: "primary"
// };
