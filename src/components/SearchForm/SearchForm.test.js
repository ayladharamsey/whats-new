import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm'

describe('SearchForm', () => {
    let wrapper, article, mockEvent; 

    beforeEach(() => {        
        mockEvent = { target: { name: 'cheese', value: 'i love so much'} }
        wrapper = shallow(<SearchForm searchArticles = {[article]}/>)
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should update the state\'s query', () => {
        expect(wrapper.state('query')).toEqual('');
        wrapper.instance().submitQuery(mockEvent);
        expect(wrapper.state('selectedArticle')).toEqual(mockEvent.value)
    });

    it.skip('should reset state back to undefined after handling submit', () => {
        wrapper.instance().mockEvent.preventDefault= jest.fn();
        wrapper.instance().searchArticles = jest.fn();
        wrapper.instance().handleSumbit(mockEvent);
        expect(wrapper.state()).toEqual({query: ''});
    });


});