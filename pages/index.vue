<template>
<div class="container is-fluid">
  <div class="columns">

    <sidebar />
    <generalDescription :advance="advance" :item="companies" />
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'

import generalDescription from '~/components/general-description'
import sidebar from '~/components/sidebar'
import axios from 'axios'

export default {
  async fetch ({store}) {
    const response = await axios.get('http://localhost:8080/advance')
    store.commit('initAdvance', response.data)
  },
  computed: {
    ...mapState({
      advance: state => state.advance,
      companies: state => state.companies
    })
  },
  components: {
    sidebar,
    generalDescription
  }
}
</script>
