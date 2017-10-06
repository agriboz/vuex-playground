import Vue from 'vue'
import Vuex from 'vuex'
import { shallow } from 'avoriaz'
import store, { mutations, actions, state } from '../store'
import Navigation from '../components/navigation'

Vue.use(Vuex)

describe('Navigation', () => {
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
    $store.commit('openMenu')
    expect($store.state.openMenu).toEqual(true)
  })

  test('getAdvance', () => {
    const newAdvance = $store.state.newAdvance
    const mockEntry = {
      id: 1,
      name: 'hey',
      amount: 2,
      date: '12/12/2017'
    }

    $store.commit('getAdvance', mockEntry)
    expect(newAdvance).toBeTruthy()
  })

  test('editAdvance', () => {
    const updateSelected = $store.state.updateSelected

    const mockEntry = {
      id: 1,
      name: 'hey',
      amount: 2,
      date: '12/12/2017'
    }
    $store.commit('editAdvance', mockEntry)

    expect(updateSelected).toEqual(mockEntry)
  })

  test('add Advance', () => {
    $store.state.advance = [
      { id: 1, name: 'hey', amount: 2, date: '12/12/2017' },
      { id: 2, name: 'yeh', amount: 3, date: '12/13/2017' }
    ]

    const expectedState = [
      { id: 1, name: 'hey', amount: 2, date: '12/12/2017' },
      { id: 2, name: 'yeh', amount: 3, date: '12/13/2017' },
      { id: 3, name: 'hey', amount: 4, date: '12/12/2017' }
    ]

    $store.commit('addAdvance', {
      id: 3,
      name: 'hey',
      amount: 4,
      date: '12/12/2017'
    })

    expect($store.state.advance).toEqual(expectedState)
  })

  test('show modal', () => {
    $store.dispatch('showModal')
    expect($store.state.modal).toBe(true)
  })
  test('hide modal', () => {
    $store.dispatch('hideModal')
    expect($store.state.modal).toBe(false)
  })
  test('show advance modal', () => {
    $store.dispatch('addAdvanceModalActive')
    expect($store.state.isAddAdvanceModalActive).toBe(true)
  })
  test('hide advance modal', () => {
    $store.dispatch('addAdvanceModalPassive')
    expect($store.state.isAddAdvanceModalActive).toBe(false)
  })
})
