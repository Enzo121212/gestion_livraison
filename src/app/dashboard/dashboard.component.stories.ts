import { Meta, StoryObj } from '@storybook/angular';

import { DashboardComponent } from './dashboard.component';

type ComponentWithCustomControls = DashboardComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Dashboard',
  component: DashboardComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Dashboard` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Dashboard: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
