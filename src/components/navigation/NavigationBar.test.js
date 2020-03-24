import React from 'react';
import { shallow } from 'enzyme';
import NavigationBar from './NavigationBar';

describe('NavigationBar component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<NavigationBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
