<template>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Yeni Avans Talep Et</p>
      </header>
      <section class="modal-card-body">
       <b-field label="%50 Oranında maaşımı avans olarak istiyorum ">
          <b-switch :value="newAdvance.percent" @input="getAdvance('percent', $event)"></b-switch>
        </b-field>

        <b-field label="Avans Tutarı">
          <b-input type="number" @input="getAdvance('amount', $event)" :value="newAdvance.amount" placeholder="Avans Tutarı" required></b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot align-end">
        <button @click="addAdvance(newAdvance)" class="button is-info">Talep Et</button>
        <button class="button" type="button" @click="closeModal">Kapat</button>
      </footer>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  computed: {
    ...mapState({
      newAdvance: state => state.newAdvance
    })
  },
  methods: {
    getAdvance (field, value) {
      this.$store.commit('getAdvance', {
        [field]: value
      })
    },
    closeModal () {
      this.$store.commit('addAdvanceModalPassive')
    },

    editAdvance (field, value) {
      this.$store.commit('editAdvance', {
        [field]: value
      })
    },
    ...mapActions([
      'addAdvance'
    ])
  }
}
</script>
