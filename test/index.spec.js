import Vue from 'vue'
import Vuex from 'vuex'
import { shallow } from 'avoriaz'

import Sidebar from '../components/sidebar'

Vue.use(Vuex)

describe('Sidebar', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: {}
    })
  })

  test('renders an img', () => {
    const wrapper = shallow(Sidebar, {store})

    expect(wrapper.find('img').length).toBe(1)
  })

  test('renders text John Doe', () => {
    const wrapper = shallow(Sidebar, {store})

    const msg = 'John Doe'
    expect(wrapper.find('.is-size-5')[0].text()).toBe(msg)
  })
})
