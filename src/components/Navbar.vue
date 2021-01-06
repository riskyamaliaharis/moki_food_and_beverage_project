<template>
  <nav
    class="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand-xs navbar-light "
  >
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link" @click="chooseCategory('fav')"
            >Favorite Product</a
          >
        </li>

        <li class="nav-item">
          <a class="nav-link" @click="chooseCategory('coffee')">Coffee</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="chooseCategory('noncoffee')"
            >Non-Coffee</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="chooseCategory('food')">Foods</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="chooseCategory('addon')">Add-on</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    chooseCategory(category_name) {
      console.log(category_name)
      this.$emit('category', category_name)
    }
  }
}
</script>

<style>
.navbar-nav a:hover {
  cursor: pointer;
  border-bottom-style: ridge;
  border-bottom-color: #895537;
}
.navbar-nav {
}
</style>
