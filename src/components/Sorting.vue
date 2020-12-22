<template>
  <div>
    <b-dropdown text="Sort By">
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
export default {
  methods: {
    sortBy(sort) {
      console.log(sort)
      this.$emit('sort', sort)
    }
  }
}
</script>
