import Menu from './Menu'
import React from 'react'
import { shallow } from 'enzyme';

describe ('Menu', () => {
    let wrapper, category; 

    beforeEach(() => {
        category='potatos'
        wrapper = shallow(<Menu selectCategory={category} />)
    });

    it('should be able to access the selectCategory function ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it.skip('should be able to call selectCategory on click', () => {
        

    });



})