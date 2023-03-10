import { html, fixture, expect } from '@open-wc/testing';
import Sinon,{ stub } from 'sinon';
import {BasicDetails} from '../src/LoanBasicDetails/BasicDetails.js';


const elem = await fixture(html`<basic-details></basic-details>`);

describe('Basic details', () => {

  

  it('BasicDetails element', async () => {
    expect(elem).to.be.an.instanceof(BasicDetails);
  });


  it('default amount value', async () => {
    expect(elem.amount).to.be.equal(10000);
  });

  it('amount type', async () => {
    expect(elem.amount).to.be.a('number');
  }); 
  
  
  it('default range value', async () => {
    expect(elem.range).to.be.equal(2);
  });

  it('range type', async () => {
    expect(elem.range).to.be.a('number');
  }); 

  
  it('default emiCalc value', async () => {
    expect(elem.emiCalc).to.be.equal(0);
  });

  it('emiCalc type', async () => {
    expect(elem.emiCalc).to.be.a('number');
  }); 


  it('_toDashboard', async () => {
    const dashboard = Sinon.spy(elem, "_toDashboard");
    const btn = elem.shadowRoot.querySelector('.btn-previous');
    btn.click();
    expect(dashboard.calledOnce).to.be.false;
  });


  it('_numToWord', async () => {
    const numToWord = Sinon.spy(elem, "_numToWord");
    elem._numToWord();
    expect(numToWord.calledOnce).to.be.true;
  });


  it('_captureDetails', async () => {
    const dashboard = Sinon.spy(elem, "_captureDetails");
    const btn = elem.shadowRoot.querySelector('.btn-next');
    btn.click();
    expect(dashboard.calledOnce).to.be.false;
  });




});
