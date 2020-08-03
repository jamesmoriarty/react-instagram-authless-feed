import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './Feed';

global.fetch = (url) => {
  return Promise.resolve(
    {
      text: () => { return 'window._sharedData = {"entry_data":{"ProfilePage":[{"graphql":{"user":{"edge_owner_to_timeline_media":{"edges":[]}}}}]}}}</script>' }
    }
  )
}

it('#render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Feed username="jamespaulmoriarty" />, div);
});
