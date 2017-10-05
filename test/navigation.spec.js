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
    console.log(updateSelected)
    const mockEntry = {
      id: 1,
      name: 'hey',
      amount: 2,
      date: '12/12/2017'
    }
    $store.commit('editAdvance', mockEntry)

    expect(updateSelected).toEqual(mockEntry)
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
