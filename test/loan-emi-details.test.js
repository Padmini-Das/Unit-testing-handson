import { html, fixture, expect } from '@open-wc/testing';
import {LoanEMIDetails} from  '../src/LoanEMIDetails/LoanEMIDetails.js';
import Sinon from 'sinon';

const element = await fixture(html`<loanemi-details></loanemi-details>`);
describe('Loan EMI details', () => {
  it('LoanEMI element', async () => {
    const elem = document.createElement('loanemi-details');
    expect(elem).to.be.an.instanceof(LoanEMIDetails);
  });

  it('h2', async () => {
    const h2 = element.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
  });
  

  it('_toBasicDetails', async () => {
    const basicDetails = Sinon.spy(elem, "_toBasicDetails");
    const btn = elem.shadowRoot.querySelector('.btn-cont .cancel-btn');
    btn.click();
    expect(basicDetails.calledOnce).to.be.false;
  });

  it('_toCustomer', async () => {
    const customer = Sinon.spy(elem, "_toCustomer");
    const btn = elem.shadowRoot.querySelector('.btn-cont .continue-btn');
    btn.click();
    expect(customer.calledOnce).to.be.false;
  });

});
