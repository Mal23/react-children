import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('Sidebar component', () => {
  it('renders Sidebar', () => {
    const wrapper = shallow(
      <Sidebar>
        <a href="hiya">Testing</a>
      </Sidebar>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
