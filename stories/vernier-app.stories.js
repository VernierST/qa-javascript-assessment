import { html } from 'lit';
import '../src/vernier-app.js';

export default {
  title: 'VernierApp',
  component: 'vernier-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <vernier-app
      style="--vernier-app-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </vernier-app>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
