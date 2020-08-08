import React from 'react';
import { create, act } from 'react-test-renderer';
import Feed from './Feed';
import Instagram from './../lib/Instagram'

it('#render', async() => {
  Instagram.getFeed = jest.fn().mockReturnValue(
    Promise.resolve([
      { url:"https://placeholder.com/640", src:"https://via.placeholder.com/640", alt:"640x640px image from placeholder.com" }
    ])
  );

  let component

  await act(async () => { 
    component = create(<Feed className="Feed" username="jamespaulmoriarty" />);
  })

  expect(component.toJSON()).toMatchSnapshot();
  expect(Instagram.getFeed).toHaveBeenCalled();
});
