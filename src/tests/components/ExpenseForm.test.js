import React from 'react';
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm';

test('should render expenseform correcty', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).ToMatchSnapshot();
})