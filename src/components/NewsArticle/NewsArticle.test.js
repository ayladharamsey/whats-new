import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
    let wrapper, storyObject;

    it('should match the snapshot with all data passed correctly', () => {
        storyObject = {
            img : "https://www.cool.com",
            headline :"bad bitches take over the world",
            description :"things are going well",
            id : 2,
            url: "www.cool.com",
            linkOut : jest.fn()
        };
        wrapper = shallow(<NewsArticle story = {storyObject} />) 

        expect(wrapper).toMatchSnapshot();
    });

    it.skip('should call the linkOut function when button is clicked', () => {
        const linkOutMock = jest.fn();
        storyObject = {
            img : "https://www.cool.com",
            headline :"potatos take over the world",
            description :"things are going well",
            id : 2,
            url: "www.cool.com",
            linkOut : {linkOutMock}
        };
        wrapper = shallow(<NewsArticle story = {storyObject} />) 
        wrapper.find('button').simulate('click');
        expect(linkOutMock).toHaveBeenCalledWith(2);
    });
});