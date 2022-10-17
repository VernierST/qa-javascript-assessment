import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

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

    const ordList = element.shadowRoot.querySelector('ol');
    expect(ordList).to.exist;
  });

  // it('renders a p tag', () => {
  //   const p = element.shadowRoot.querySelector('p');
  //   expect(p).to.exist;
  //   expect(p.textContent).to.contain('Thanks');
  // });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});

// how to show there are 15 natural event titles?
// 1. check that data gets through at all
// 2. check that there is a list
// 3. check that there are 15 <li></li>
// 4. check that the <li></li> contain strings
// 5. check that each string contains a natural event word
//   -- but what to do with the one in French?

// I've used superagent in the past, so need to figure out the syntax of the jest requests without superagent - find another way to make requests to the app
// shadowRoot explanation here: https://www.geeksforgeeks.org/what-is-shadow-root-and-how-to-use-it/
// had trouble targeting the list, it was populating on the site but the test couldn't target it, changed syntax all around
// cant target the ol or the p tag with the same shadowRoot.querySelector syntax - what makes the h1 different, why can it target that? it could possibly be that I'm now trying to target a "lit" element and it is still being built?
// need to use waitUntil to give enough time for list to render before testing for it
