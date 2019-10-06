import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer'

describe('NewsContainer', () => {
    let wrapper, stories, selected; 

    beforeEach(() => {
        stories = [{description: 'yas queen', headline: 'i rule the school', id: 3, url: 'www.coolkids.com', img: 'www.potatoes.com'}];
        selected = {description: 'yas queen', headline: 'i rule the school', id: 3, url: 'www.coolkids.com', img: 'www.potatoes.com'};
        wrapper = shallow(<NewsContainer newsArticles = {stories} selectedArticle={selected} linkOut={jest.fn()}/>)
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })


});