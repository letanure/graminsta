import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);
chai.use(sinonChai);

import GraminstaWrapper from '../src/index';

describe('GraminstaWrapper Library', function () {

  it('should create an instance of GraminstaWrapper', () => {
    let graminsta = new GraminstaWrapper({});
    expect(graminsta).to.be.an.instanceof(GraminstaWrapper);
  });

});