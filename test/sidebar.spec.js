import Vue from 'vue'
import Vuex from 'vuex'
import { shallow } from 'avoriaz'
import store, { actions, state, mutations } from '../store'
import Sidebar from '../components/sidebar'

Vue.use(Vuex)

describe('Sidebar', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      actions,
      state,
      mutations
    })
  })

  test('renders an img', () => {
    const wrapper = shallow(Sidebar, { store })

    expect(wrapper.find('img').length).toBe(1)
  })

  test('renders text John Doe', () => {
    const wrapper = shallow(Sidebar, { store })

    const msg = 'John Doe'
    expect(wrapper.find('.is-size-5')[0].text()).toBe(msg)
  })

  test('Sidebar `menu` list store', () => {
    const menu = [
      {
        id: 1,
        name: 'Anasayfa',
        link: '/',
        icon: 'fa fa-home'
      },
      {
        id: 2,
        name: 'Avans Taleplerim',
        link: '/avans',
        icon: 'fa fa-money'
      },
      {
        id: 3,
        name: 'Bağlı Çalışan İçin Avans',
        link: '/bagli',
        icon: 'fa fa-users'
      },
      {
        id: 4,
        name: 'Avans Talepleri Listele',
        link: '/avanstalep',
        icon: 'fa fa-list'
      },
      {
        id: 5,
        name: 'Yönetim',
        link: '/settings',
        icon: 'fa fa-cog'
      }
    ]
    store.commit('initMenu', menu)
    expect(store.state.menu).toEqual(menu)
  })
})
