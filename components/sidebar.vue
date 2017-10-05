<template>
  <div class="column is-2 sidebar animated">
    <div class="has-text-centered">
        <img class="is-128x128" src="http://bulma.io/images/placeholders/128x128.png">
        <p class="is-size-5">John Doe</p>
        <p class="is-size-6">Ücretlendirme ve Yan Haklar</p>
    </div>
    <hr />
    <aside class="menu">
      <ul class="menu-list">
        <li :key="m.id" v-for="m of menu">
          <nuxt-link exact :to="m.link">
            <span class="icon">
              <i :class="m.icon"></i>
            </span>{{m.name}}

          </nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      menu: state => state.menu
    })
  }
}
</script>
