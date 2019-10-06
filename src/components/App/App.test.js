import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper,mockState;

  beforeEach(() => {
    wrapper = shallow(<App />)
    mockState = {
      newsData:
      [{
          lemon: 
            {description: 'wow', headline: 'stellar', id: 1, img: 'www.cool.com', url: 'www.cooler.com'}
        }, 
        {
          lime: 
            {description: 'intersting', headline: 'spectacular', id: 2, img: 'www.cooler.com', url: 'www.cooling.com'}
        }
      ],
      selectedNewsCategory: 'lemon',
      selectedNewsArticle: ''
    }

  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it.skip('should update state with a category when selectCategory is called', () => {
    expect(wrapper.state('selectedNewsCategory')).toMatchObject({description: 'wow', headline: 'stellar', id: 1, img: 'www.cool.com', url: 'www.cooler.com'})
    wrapper.instance().selectCategory(mockState.newsData[2])
    expect(wrapper.state('selectedNewsCategory')).toBe({description: 'intersting', headline: 'spectacular', id: 2, img: 'www.cooler.com', url: 'www.cooling.com'})
  })

  it.skip('should update state with an article when selectArticles is called', () => {

  })

})
