import { Meta, StoryObj } from '@storybook/angular';

import { VentesComponent } from './ventes.component';

type ComponentWithCustomControls = VentesComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Ventes',
  component: VentesComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Ventes` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Ventes: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
