<template>
  <nav class="navbar has-shadow">
    <div class="navbar-brand">
      <div  @click="openMenu" class="navbar-item">
        <span class="icon">
          <i class="fa fa-bars"></i>
        </span>
      </div>

      <a class="navbar-item">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'openMenu'
    ])
  }
}
</script>





