import axios from 'axios'

export const state = () => ({
  openMenu: false,
  advance: [],
  newAdvance: {},
  selected: {},
  isAddAdvanceModalActive: false,
  isEditAdvanceModalActive: false,
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
  openMenu (state) {
    state.openMenu = !state.openMenu
  },
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

  addAdvanceModalActive (state) {
    state.isAddAdvanceModalActive = true
  },

  addAdvanceModalPassive (state) {
    state.isAddAdvanceModalActive = false
  },

  showModal (state, modal) {
    state.modal = true
  },

  hideModal (state) {
    state.modal = false
  },

  getAdvance (state, newAdvance) {
    Object.assign(state.newAdvance, newAdvance)
  },

  addAdvance (state, newAdvance) {
    console.log(newAdvance)
    state.advance = [...state.advance, newAdvance]
  },

  editSelected (state, selected) {
    const updated = state.updateSelected
    Object.assign(selected, updated)
  },

  removeSelected (state, selected) {
    state.advance = state.advance.filter(a => a.id !== selected.id)
  }
}

export const getters = {

}

export const actions = {
  async advanceInit ({ commit }) {
    const { data } = await axios.get('http://localhost:8080/advance')
    console.log(data)
    commit('initAdvance', data)
  },
  openMenu ({ commit }) {
    commit('openMenu')
  },
  async addAdvance ({ commit, state }, newAdvance) {
    const {data} = await axios.post('http://localhost:8080/advance', newAdvance)
    commit('addAdvance', data)
    commit('addAdvanceModalPassive')
  },

  getAdvance ({ commit }) {
    commit('getAdvance')
  },

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

  addAdvanceModalActive ({ commit }) {
    commit('addAdvanceModalActive')
  },

  addAdvanceModalPassive ({ commit }) {
    commit('addAdvanceModalPassive')
  },

  showModal ({ commit }) {
    commit('showModal')
  },

  hideModal ({ commit }) {
    commit('hideModal')
  }
}
