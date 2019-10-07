import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper, mockData;

  beforeEach(() => {
    wrapper = shallow(<App />)
    mockData = [
      {local: 
        [{
          id: 2,
          img: 'www.coolkids.com/image',
          headline: 'Only the coolest may enter',
          description: 'Wow oh wow.',
          url: 'www.coolkids.com'
        },
        {
          id: 3,
          img: 'www.coolbrats.com/image',
          headline: 'Only the coolest brats may enter',
          description: 'Wow oh wow brats.',
          url: 'www.coolbrats.com'
        }]},

        {entertainment : 
        [{
          id: 2,
          img: 'www.coolkids.com/image',
          headline: 'Only the coolest may enter',
          description: 'Wow oh wow.',
          url: 'www.coolkids.com'
        },
        {
          id: 3,
          img: 'www.coolbrats.com/image',
          headline: 'Only the coolest brats may enter',
          description: 'Wow oh wow brats.',
          url: 'www.coolbrats.com'
        }]},

        {health : 
        [{
          id: 2,
          img: 'www.coolkids.com/image',
          headline: 'Only the coolest may enter',
          description: 'Wow oh wow.',
          url: 'www.coolkids.com'
        },
        {
          id: 3,
          img: 'www.coolbrats.com/image',
          headline: 'Only the coolest brats may enter',
          description: 'Wow oh wow brats.',
          url: 'www.coolbrats.com'
        }]},

        {science : 
        [{
          id: 2,
          img: 'www.coolkids.com/image',
          headline: 'Only the coolest may enter',
          description: 'Wow oh wow.',
          url: 'www.coolkids.com'
        },
        {
          id: 3,
          img: 'www.coolbrats.com/image',
          headline: 'Only the coolest brats may enter',
          description: 'Wow oh wow brats.',
          url: 'www.coolbrats.com'
        }]},

        {technology :
        [{
          id: 2,
          img: 'www.coolkids.com/image',
          headline: 'Only the coolest may enter',
          description: 'Wow oh wow.',
          url: 'www.coolkids.com'
        },
        {
          id: 3,
          img: 'www.coolbrats.com/image',
          headline: 'Only the coolest brats may enter',
          description: 'Wow oh wow brats.',
          url: 'www.coolbrats.com'
        }]}
    ];

  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to update State with selectCategory', () => {
    wrapper.instance().selectCategory(mockData[0]);
    expect(wrapper.state('selectedNewsCategory')).toEqual(mockData[0])
  });

  it('should be able to update State with selectArticle', () => {
    wrapper.instance().searchArticles(mockData[0][0]);
    expect(wrapper.state('selectArticle')).toEqual(mockData[0[0]])
  });

})
