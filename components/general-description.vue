<template>

  <section class="column main">
    <h4 class="is-size-4">Avans Taleplerim</h4>
    <hr />
  <nav class="level is-pulled-right">
   <div class="level-right">
      <p class="level-item">
        <a  @click="showAddAdvanceModal"
            class="button is-info">Yeni Avans Ekle</a></p>
    </div>
  </nav>

  <b-table :data="$store.state.advance"
           :bordered="true"
           :selected.sync="selected"
           :striped="true"
           :loading="isLoading"
           :paginated="isPaginated"
           :per-page="perPage"
           :pagination-simple="isPaginationSimple"
           :default-sort-direction="defaultSortDirection"
           default-sort="id">

    <template scope="props">
      <b-table-column label="ID" field="id" sortable width="40" numeric>
        {{ props.row.id }}
      </b-table-column>

      <b-table-column sortable field="amount" label="Avans Tutarı">
        {{ props.row.amount }}
      </b-table-column>

      <b-table-column label="%50" centered>
        {{ props.row.percent ? 'Evet' : 'Hayır'}}
      </b-table-column>

      <b-table-column sortable field="first_name" label="First Name">
        {{ props.row.first_name }}
      </b-table-column>

      <b-table-column label="Avans Talep Tarihi">
        {{ new Date(props.row.date).toLocaleDateString() }}
      </b-table-column>
      <b-table-column>
         <button class="button is-info" @click="showModal">
            Detay
        </button>
      </b-table-column>
    </template>
  </b-table>
  <b-modal :active.sync="$store.state.modal" has-modal-card>
    <detail></detail>
  </b-modal>


  <b-modal :active.sync="$store.state.isAddAdvanceModalActive" has-modal-card>
    <add></add>
  </b-modal>
</section>

</template>


<script>
import detail from '@/components/advance/detail'
import add from '@/components/advance/add'

export default {

  components: {
    detail,
    add
  },
  data () {
    return {
      isLoading: false,
      isPaginated: true,
      isPaginationSimple: true,
      defaultSortDirection: 'asc',
      perPage: 10,
      isComponentModalActive: false
    }
  },

  methods: {
    showAddAdvanceModal () {
      this.$store.dispatch('addAdvanceModalActive')
    },

    showModal () {
      this.$store.dispatch('showModal')
    }
  },
  mounted () {
    this.$store.dispatch('advanceInit')
  },
  computed: {
    selected: {
      get () {
        return this.$store.state.selected
      },
      set (value) {
        this.$store.commit('initSelected', value)
      }
    }
  }
}
</script>
