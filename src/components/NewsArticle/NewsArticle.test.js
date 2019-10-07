import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
    let wrapper, storyObject, linkOutMock;

    beforeEach(() => {
        linkOutMock=jest.fn()
        storyObject = {
            img : "https://www.cool.com",
            headline :"bad bitches take over the world",
            description :"things are going well",
            id : 2,
            url: "www.cool.com",
        };
        wrapper = shallow(<NewsArticle story = {storyObject} linkOut={linkOutMock}/>)
    });

    it('should match the snapshot with all data passed correctly', () => { 
        expect(wrapper).toMatchSnapshot();
    });

    it('should call the linkOut function when button is clicked', () => {
        global.open = jest.fn();
        wrapper.instance().forceUpdate()
        wrapper.find('button').simulate('click');
        expect(linkOutMock).toHaveBeenCalledWith(2);
        expect(global.open).toBeCalled();
    });
});