import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header'


test('should render header correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe("Expensive");
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput());
});

test('should call startlogut button', () => {
    const startlogut = jest.fn()
    const wrapper = shallow(<Header startLogout={startlogut} />)
    wrapper.find('button').simulate('click')
    expect(startlogut).toHaveBeenCalled();
});