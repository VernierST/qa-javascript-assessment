import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

// import makeNaturalEventsList from '../src/VernierApp.js'; //unsure how this import works when there is no default export with Lit
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
    // const { events } =  makeNaturalEventsList();
    // // check to ensure there is a list populating on the page
    // const ordList = element.shadowRoot.querySelector('ol');
    // expect(ordList).to.exist;
    // // check that there are 15 list items
    // expect(events).to.have.lengthOf(15);
    // // check that the first list item contains a string
    // const listItem = element.shadowRoot.querySelector('li');
    // expect(listItem).to.be.a('string');
    // // check that all list items contain strings
    // const isStringsArray = arr => arr.every(i => typeof i === 'string')
    // expect(isStringsArray(events)).to.be.true;
    // // check that each string contains a natural event keyword
    // const naturalEvents = ['Typhoon', 'Volcano', 'Storm', 'Fire','Tsunami', 'Earthquake', 'Hurricane', 'Tornado'];
    // expect(events[2]).to.contain.oneOf(naturalEvents);
    // // this test should fail on events[8] since there is no english keyword
    // // check that each li contains the exact string expected
    // expect(events[0]).to.equal(['Typhoon Nesat']);
    // expect(events[14]).to.equal(['Eagle Creek Fire']);
  });

  // it('renders a p tag', async () => {
  //   const p = element.shadowRoot.querySelector('p');
  //   expect(p).to.exist;
  //   expect(p.textContent).to.contain('Thanks');
  // });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});

// how to show there is a list 15 natural event titles?
// 1. check that there is a list
// 2. check that there are 15 <li></li>
// 3. check that the <li></li> contain strings
// 4. check that each string contains a natural event word
// 5. check that each li contains the exact string expected

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
// either my syntax for implementing these is incorrect so I'm not properly letting the data load on the page before running the test, or ... I'm missing something else entirely
