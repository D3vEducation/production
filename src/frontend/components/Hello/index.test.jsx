// Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Component to test...
import Hello from './index';

describe('Hello', () => {
  const subject = shallow(<Hello />);
  const subjectWithProps = shallow(<Hello name="Carlos" />);

  it('should render Hello component', () => {
    expect(subject.length).toBe(1);
  });

  it('should render by default Hello World', () => {
    expect(subject.text()).toBe('Hello World');
  });

  it('should render the name prop', () => {
    expect(subjectWithProps.text()).toBe('Hello Carlos');
  });

  it('should has .Hello class', () => {
    expect(subject.find('h1').hasClass('Hello')).toBe(true);
  });
});
