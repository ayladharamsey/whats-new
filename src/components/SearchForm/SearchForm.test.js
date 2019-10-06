import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm'
import { exportAllDeclaration } from '@babel/types';

describe('SearchForm', () => {
    let wrapper, article; 

    beforeEach(() => {
        article = { description: 'cheese whiz rules', headline: 'i love it the most', id: 5, img: 'www.cooooool.com', url:'www.yup.com'}
        wrapper = shallow(<SearchForm searchArticles = {[article]}/>)
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })



});