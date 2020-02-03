import React from 'react';
import { shallow } from 'enzyme';
import NavigationBar from './NavigationBar';

describe('NavigationBar component', () => {
  it('matches a snapshot', () => {
    const navigationElements = [
      { label: 'Portfolio', value: 'portfolio' },
      { label: 'Connect', value: 'Connect' },
      { label: 'Home', value: 'home' }
    ];
    const wrapper = shallow(<NavigationBar navigationElements={navigationElements}name="sample name" onChange={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
