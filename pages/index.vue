<template>
<div class="container is-fluid">
  <div class="columns">

    <sidebar :class="[{['active fadeOutLeft']: $store.state.openMenu}, 'fadeInLeft']" />
    <generalDescription :class="[{['animated slideInRight active-main']: $store.state.openMenu}]" />
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'

import generalDescription from '~/components/general-description'
import sidebar from '~/components/sidebar'
// import axios from 'axios'

export default {
  async fetch ({store}) {
  //  const response = await axios.get('http://localhost:8080/advance')
  //  store.commit('initAdvance', response.data)
  },

  computed: {
    ...mapState({
      openMenu: state => state.openMenu
    })
  },
  components: {
    sidebar,
    generalDescription
  }
}
</script>
<style scoped>
  .active {
    position: absolute
  }
  .active-main {
    margin-left: 0
  }
</style>
