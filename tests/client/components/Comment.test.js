import React from 'react'
import { Comment } from '../../../client/components/Comments/Comment'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

test('<Comment />', () => {
  const expected = 2
  const testFn = jest.fn()
  const wrapper = shallow(<Comment dispatch={testFn} t={key => key} />)
  const actual = wrapper.find('button').length
  expect(actual).toEqual(expected)
})

test('When the delete button is clicked in <Comment />', () => {
  const id = 1
  const testDel = jest.fn()
  const wrapper = mount(<Comment delComment={testDel} t={key => key} />)
    wrapper.find('#deleteButton').simulate(
      'click',
      {preventDefault() {}}
    )
    expect(testDel.mock.calls.length).toBe(1)
  })