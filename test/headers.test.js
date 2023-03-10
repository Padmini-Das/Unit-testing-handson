import { html, fixture, expect } from '@open-wc/testing';
import Sinon,{ stub } from 'sinon';
import  {Header} from  '../src/header/Header.js';


const element = await fixture(html`<loan-header></loan-header>`);
const localeChanged = Sinon.spy(element, "localeChanged");

describe('loan-header', () => {
  it('Header element', async () => {
    expect(element).to.be.an.instanceof(Header);
  });

  it('header', async () => {
    const header = element.shadowRoot.querySelector('header');
    expect(header).to.exist;
  });


  it('localeChanged', async () => {
    const btn = element.shadowRoot.querySelector('.en-GB');
    btn.click();
    expect(localeChanged.calledOnce).to.be.true;
  });


  it('localeChanged by btnCursor', async () => {
    const btn = element.shadowRoot.querySelector('.nl-NL');
    btn.click();
    expect(localeChanged.calledOnce).to.be.false;
  });

});
