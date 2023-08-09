import { Meta, StoryObj } from '@storybook/angular';

import { ArticlesComponent } from './articles.component';

type ComponentWithCustomControls = ArticlesComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Articles',
  component: ArticlesComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Articles` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Articles: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
