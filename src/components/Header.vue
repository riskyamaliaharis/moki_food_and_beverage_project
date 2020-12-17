<template>
  <b-container>
    <header>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="menu-nav">
            <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item
              ><router-link to="/product">Product</router-link></b-nav-item
            >
            <b-nav-item
              ><router-link to="/cart">You Cart</router-link></b-nav-item
            >
            <b-nav-item
              ><router-link to="/payment">payment</router-link></b-nav-item
            >
            <b-nav-item
              ><router-link to="/history">history</router-link></b-nav-item
            >
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <img src="https://placekitten.com/g/30/30" alt="Kitten" />
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
  </b-container>
</template>

<style>
header {
  background-color: rgb(255, 186, 51);
}

.menu-nav {
  color: black;
  margin: auto;
}
</style>
