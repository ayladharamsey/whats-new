import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
    let wrapper, storyObject;

    beforeEach(() => {
        storyObject = {
            img : "https://www.cool.com",
            headline :"bad bitches take over the world",
            description :"things are going well",
            id : 2,
            linkOut :jest.fn()
        };
        wrapper = shallow(<NewsArticle story = {storyObject} />) 
    })

    it('should match the snapshot with all data passed correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('render the image of the artcile', () => {
        expect(wrapper.contains("https://www.cool.com")).toHaveBeenCalledWith("https://www.cool.com");
    })

})