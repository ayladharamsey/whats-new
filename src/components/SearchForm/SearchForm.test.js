import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm'

describe('SearchForm', () => {
    let wrapper, mockEvent, searchArticlesMock; 

    beforeEach(() => {        
        mockEvent = { target: { name: 'test', value: 'testing'} }
        searchArticlesMock=jest.fn();
        wrapper = shallow(<SearchForm searchArticles = {searchArticlesMock}/>)
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should update the state\'s query', () => {
        expect(wrapper.state('query')).toEqual('');
        wrapper.instance().submitQuery(mockEvent);
        expect(wrapper.state('selectedArticle')).toEqual(mockEvent.value)
    });

    it('should reset state back to undefined after handling submit', () => {
        let mockPreventDefault = jest.fn()
        let mockEvent = {
            preventDefault : mockPreventDefault
        }
        wrapper.instance().handleSumbit(mockEvent)

        expect(mockPreventDefault).toHaveBeenCalled();
        wrapper.instance().searchArticles = jest.fn();
        expect(wrapper.state()).toEqual({query: ''});
    });

    it.skip('should query state upon typing', () => {  
        wrapper.instance().submitQuery(mockEvent)      
        wrapper.find('input').simulate('change')
        expect(wrapper.state('query')).toEqual({query: 'testing'})
    });


});