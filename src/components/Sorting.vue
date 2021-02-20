<template>
  <div class="sort">
    <b-dropdown class="btn-sort" variant="warning" text="Sort By">
      <b-dropdown-item @click="sortBy('product_name ASC')">A-Z</b-dropdown-item>
      <b-dropdown-item @click="sortBy('product_name DESC')"
        >Z-A</b-dropdown-item
      >
      <b-dropdown-item @click="sortBy('product_price ASC')"
        >Price: Low - High</b-dropdown-item
      >
      <b-dropdown-item @click="sortBy('product_price DESC')"
        >Price: High - Low</b-dropdown-item
      >
      <b-dropdown-item @click="sortBy('product_created_at ASC')"
        >Oldest</b-dropdown-item
      >
      <b-dropdown-item @click="sortBy('product_created_at DESC')"
        >Newest</b-dropdown-item
      >
    </b-dropdown>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ user: 'setUser' })
  },
  methods: {
    ...mapMutations(['changeSort']),
    ...mapActions(['getProducts']),
    async sortBy(sort) {
      await this.changeSort(sort)

      await this.getProducts()
    }
  }
}
</script>

<style scoped>
div.sort .btn-sort {
  background-color: #ffcb65;
  width: 150px;
  border-radius: 5px;
}
div.sort {
  text-align: center;
}
</style>
