import { html } from 'lit';
import { fixture, expect, waitUntil } from '@open-wc/testing';

import '../src/vernier-app.js';

describe('VernierApp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<vernier-app></vernier-app>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('Natural Events');
  });

  it('renders a list of 15 natural event titles', async () => {
    // Complete this test
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
