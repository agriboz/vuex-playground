import axios from 'axios'

export const state = () => ({
  advance: [],
  selected: {},
  modal: false,
  updateSelected: {},
  menu: [
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
})

export const mutations = {
  initMenu (state, menu) {
    state.menu = menu
  },
  initAdvance (state, advance) {
    state.advance = advance
  },
  initSelected (state, selected) {
    state.selected = selected
  },

  editAdvance (state, field) {
    Object.assign(state.updateSelected, field)
  },

  showModal (state, modal) {
    state.modal = true
  },

  hideModal (state) {
    state.modal = false
  },

  addAdvance (state, advance) {
    state.advance = [...state.advance, advance]
  },

  editSelected (state, selected) {
    const updated = state.updateSelected
    Object.assign(selected, updated)
  },

  removeSelected (state, selected) {
    state.advance = state.advance.filter(a => a.id !== selected.id)
  }

}

export const actions = {
  async addAdvance ({ commit }, payload) {
    const { data } = await axios.post('http://localhost:8080', payload)
    commit('addAdvance', data)
  }

  updateAdvance ({ commit, state }, payload) {
    commit('editSelected', payload)
    axios.put(`http://localhost:8080/advance/${payload.id}`, payload)

    commit('hideModal')
  },

  async deleteAdvance ({ commit }, payload) {
    await axios.delete(`http://localhost:8080/advance/${payload.id}`)
    commit('removeSelected', payload)
    commit('hideModal')
  },

  showModal ({ commit }) {
    commit('showModal')
  },

  hideModal ({ commit }) {
    commit('hideModal')
  }
}
