import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';


describe('LoanApplication', () => {
  // Write test cases inside this block
  let elem;
  before(async () => {
    elem = await fixture(html`<loan-application></loan-application>`);
});


it('dashboard', async () => {
  await fixture(html`<dash-board></dash-board>`);
});

it('default value check', async () => {
  expect(elem.title).to.be.equal('Hey there');
  expect(elem.counter).to.be.equal(5);
});

it('increment', async () => {
  elem.__increment();
  expect(elem.counter).to.be.exist;
});

});
