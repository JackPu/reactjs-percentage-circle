import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {Spinner} from '../src/index';

describe('ReactLoadingSpinner Component Tests', function () {
  
  it('Default has a empty element',function() {
    expect(shallow(<Spinner />).find('span').length).toBe(1);
  });
  
  it('Default has svg loading',function() {
    expect(shallow(<Spinner show="true" text="请求"/>).find('svg').length).toBe(1);
  });
  
  it('allows us to set text', () => {
    let wrap = shallow(<Spinner show={true} text="请求"/>);
    expect(wrap.text()).toEqual('请求');  
  });
  
  it('allows us to set type', () => {
   // expect(shallow(<Spinner show={true} type="gif" />).find('img').length).toBe(1);
  });
  
  
});