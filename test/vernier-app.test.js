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
    //   // Complete this test
    // // check to ensure there is a list populating on the page
    // const ordList = element.shadowRoot.querySelector('ol');
    // expect(ordList).to.exist;
    // // check that there are 15 list items
    // expect(ordList).to.have.lengthOf(15);
    // // check that list items contain strings
    // const listItem = element.shadowRoot.querySelector('li');
    // expect(listItem).to.be.a('string');
    // // // ideally would map through each list item to make sure each one contains a string
    // // // for let (i=0, i.length i++) if string return true
    // // check that each string contains a natural event keyword
    // const naturalEvents = ['Typhoon', 'Volcano', 'Storm', 'Fire', 'Fournaise', 'Tsunami', 'Earthquake', 'Hurricane', 'Tornado'];
    // expect(listItem).to.contain.oneOf(naturalEvents);
    // // // ideally would map through each list item to make sure each one contains a string
    // // // for let (i=0, i.length i++) if string return true
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
// 1. check that there is a list
// 2. check that there are 15 <li></li>
// 3. check that the <li></li> contain strings
// 4. check that each string contains a natural event word

// My notes for working through initial issues:
// I've used superagent in the past, so need to figure out the syntax of the jest requests without superagent - find another way to make requests to the app
// shadowRoot explanation here: https://www.geeksforgeeks.org/what-is-shadow-root-and-how-to-use-it/
// had trouble targeting the list, it was populating on the site but the test couldn't target it, changed syntax all around
// cant target the ol or the p tag with the same shadowRoot.querySelector syntax - what makes the h1 different, why can it target that? it could possibly be that I'm now trying to target a "lit" element and it is still being built?
// need to use waitUntil to give enough time for list to render in shadow DOM before testing for it

// Wanted to see if data was coming through at all from #trends-list or 'ol' and it returns null in all of the following scenarios:
// Tried this with nextFrame, aTimeout, waitUntil - to no avail:
// it('targets the ol', async () => {
//   await aTimeout(1000);
//   const ordList = element.shadowRoot.querySelector('#trends-list');
//   console.log(ordList, 'exists');
// });
// either my syntax for implementing these is incorrect so I'm not properly letting the data load on the page before running the test, or ...

// learned about Chai
