import React from 'react';
import { shallow } from 'enzyme';
import PC from '../src/index';

describe('ReactjsPercentageCircle Component Tests', function () {
  
  it('Default has a left wrap loader',function() {
    expect(shallow(<PC />).find('.loader').length).toBe(1);
  });
  
  it('Default percent will show',function() {
    let wrap = shallow(<PC percent={80}></PC>);
    expect(wrap.find('.text').length).toBe(1);
  });
  it('allows us to set child component', () => {
    let wrap = shallow(<PC percent={30}><svg></svg></PC>);
    expect(wrap.find('svg').length).toBe(1);  
  });
  
});