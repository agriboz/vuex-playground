import Vue from 'vue'
import Vuex from 'vuex'
import { shallow } from 'avoriaz'
import store, { mutations, actions, state } from '../store'
import Navigation from '../components/navigation'

Vue.use(Vuex)

describe('Sidebar', () => {
  let $store
  beforeEach(() => {
    $store = new Vuex.Store({
      actions,
      state,
      mutations
    })
  })

  test('renders an img', () => {
    const wrapper = shallow(Navigation, { store })

    expect(wrapper.find('img').length).toBe(1)
  })

  test('open menu initial', () => {
    const openMenu = $store.state.openMenu

    expect(openMenu).toEqual(false)
  })

  test('open menu toggled', () => {
    $store.dispatch('openMenu')

    expect($store.state.openMenu).toEqual(true)
  })
})
