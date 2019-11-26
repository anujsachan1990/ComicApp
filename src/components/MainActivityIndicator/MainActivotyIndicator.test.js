import React from 'react'
import renderer from 'react-test-renderer'

import MainActivityIndicator from './MainActivityIndicator'

describe('<MainActivityIndicator />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MainActivityIndicator />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
