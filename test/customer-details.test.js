import { html, fixture, expect } from '@open-wc/testing';
import Sinon,{ stub } from 'sinon';

import {CustomerDetails} from '../src/Customer/Customer-details.js';


const element = await fixture(html`<customer-details></customer-details>`);
describe('customer details', () => {
  it('customer detail element', async () => {
    const elem = document.createElement('customer-details');
    expect(elem).to.be.an.instanceof(CustomerDetails);
  });

  it('h2', async () => {
    const h2 = element.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
  });

 
  it('_toEmidetails', async () => {
    const emidetails = Sinon.spy(element, "_toEmidetails");
    const btn = element.shadowRoot.querySelector('.backbg-btn-color');
    btn.click();
    expect(emidetails.calledOnce).to.be.false;
  });


});
