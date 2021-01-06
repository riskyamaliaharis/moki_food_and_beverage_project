<template>
  <div>
    <b-dropdown class="b" variant="primary" text="Sort By">
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
import { mapMutations, mapActions } from 'vuex'
export default {
  methods: {
    ...mapMutations(['changeSort']),
    ...mapActions(['getProducts']),
    sortBy(sort) {
      console.log('before sort ' + sort)
      this.changeSort(sort)
      console.log('after sort ' + sort)
      this.getProducts()
    }
  }
}
</script>

<style scoped>
.b {
  position: sticky;
}
</style>
