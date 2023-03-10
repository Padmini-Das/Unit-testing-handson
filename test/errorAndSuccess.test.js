import { html, fixture, expect } from '@open-wc/testing';
import Sinon,{ stub } from 'sinon';
import {LoanSuccess} from '../src/SuccessAndError/Success.js';
import {LoanError} from '../src/SuccessAndError/Error.js';

const element = await fixture(html`<loan-success></loan-success>`);
const element1 = await fixture(html`<loan-error></loan-error>`);

describe('Success screen ', () => {
  it('loan success element', async () => {
    const elem1 = document.createElement('loan-success');
    expect(elem1).to.be.an.instanceof(LoanSuccess);
  });

  it('h2', async () => {
    const h2 = element.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
  });


  it('_toHome', async () => {
    const home = Sinon.spy(element, "_toHome");
    const btn = element.shadowRoot.querySelector('.home-btn');
    btn.click();
    expect(home.calledOnce).to.be.false;
  });

});

describe('error screen', () => {
  it('loan errorelement', async () => {
    const elem2 = document.createElement('loan-error');
    expect(elem2).to.be.an.instanceof(LoanError);
  });

  it('h2', async () => {
    const h2 = element1.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
  });
  
  it('_toHome', async () => {
    const home = Sinon.spy(element1, "_toHome");
    const btn = element1.shadowRoot.querySelector('.home-btn');
    btn.click();
    expect(home.calledOnce).to.be.false;
  });


});
