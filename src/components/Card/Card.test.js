import React from 'react'
import renderer from 'react-test-renderer'

import Card from './Card'

const props = {
  item: {
    title: 'Title',
    price: 'price',
    description: 'description',
    publisher: 'publisher',
    release_date: 'release_date',
    creators: 'creators',
  },
}

describe('<Card />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Card {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
