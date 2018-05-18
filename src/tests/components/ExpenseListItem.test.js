import ExpenseListItem from '../../components/ExpenseListItem'
import { shallow } from 'enzyme';
import React from 'react'
import expenses from '../fixtures/expenses';

test('should render each list item', () =>{
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();

});