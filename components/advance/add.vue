<template>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Avans Talep Et</p>
      </header>
      <section class="modal-card-body">
       <b-field label="%50 Oranında maaşımı avans olarak istiyorum ">
          <b-switch :value="selected.percent" @input="editAdvance('percent', $event)"></b-switch>
        </b-field>

        <b-field label="Avans Tutarı">
          <b-input type="number" @input="editAdvance('amount', $event)" :value="selected.amount" placeholder="Avans Tutarı" required></b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot align-end">
        <button @click="updateAdvance(selected)" class="button is-info">Talep Et</button>
        <button class="button is-danger" @click="deleteAdvance(selected)">İptal Et</button>
        <button class="button" type="button" @click="closeModal">Kapat</button>
      </footer>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  computed: {
    ...mapState({
      selected: state => state.selected
    })
  },
  methods: {
    closeModal () {
      this.$store.commit('hideModal')
    },

    editAdvance (field, value) {
      this.$store.commit('editAdvance', {
        [field]: value
      })
    },
    ...mapActions([
      'updateAdvance',
      'deleteAdvance'
    ])
  }
}
</script>
