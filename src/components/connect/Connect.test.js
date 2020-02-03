import React from 'react';
import { shallow } from 'enzyme';
import Connect from './Connect';

describe('Connect component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Connect />);
    expect(wrapper).toMatchSnapshot();
  });
});
