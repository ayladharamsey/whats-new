import Menu from './Menu'
import React from 'react'
import { shallow } from 'enzyme';

describe ('Menu', () => {
    let wrapper, category, mockSelect; 

    beforeEach(() => {
        mockSelect= jest.fn()
        wrapper = shallow(<Menu selectCategory={mockSelect} />)
    });

    it('should be able to access the selectCategory function ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should be able to call selectCategory on click of a topic', () => {
        wrapper.find('h3').at(0).simulate('click');
        expect(mockSelect).toHaveBeenCalled();
    });



})