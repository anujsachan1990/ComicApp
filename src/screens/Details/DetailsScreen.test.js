import React from 'react'
import renderer from 'react-test-renderer'

import DetailsScreen from './DetailsScreen'

const props = {
  navigation: {
    state: {
      param: {
        item: {
          diamond_id: 'someID',
        },
      },
    },
  },
}

describe('<DetailsScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DetailsScreen {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
