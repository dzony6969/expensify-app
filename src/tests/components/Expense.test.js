import React from 'react';
import { shallow } from 'enzyme';
import Expense from '../../components/Expense'

test('should render Expense page', () => {
    const wrapper = shallow(<Expense/>)
    expect(wrapper).toMatchSnapshot();
});
