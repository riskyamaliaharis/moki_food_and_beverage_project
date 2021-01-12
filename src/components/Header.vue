<template>
  <b-container fluid class="header">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
      rel="stylesheet"
    />
    <b-container>
      <header>
        <b-navbar toggleable="lg" class="header-set">
          <b-navbar-brand class="satisfy" v-color="brown">Moki</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="menu-nav">
              <b-nav-item
                ><router-link class="menunav" to="/"
                  >Home</router-link
                ></b-nav-item
              >
              <b-nav-item
                ><router-link class="menunav" to="/product"
                  >Product</router-link
                ></b-nav-item
              >
              <b-nav-item
                ><router-link class="menunav" to="/cart"
                  >Your Cart</router-link
                ></b-nav-item
              >
              <b-nav-item
                ><router-link class="menunav" to="/history"
                  >History</router-link
                ></b-nav-item
              >
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  v-model="inputSearch"
                  @keydown.enter.prevent="searchData"
                  placeholder="Search"
                ></b-form-input>
              </b-nav-form>
              <b-nav-item>
                <a href="#" class="btn"
                  ><img
                    class="msg"
                    src="../assets/img/chat_icon.png"
                    alt="chat-icon"
                /></a>
              </b-nav-item>
              <b-nav-item-dropdown right class="my-2">
                <!-- Using 'button-content' slot -->

                <template #button-content>
                  <img
                    class="profile_img"
                    src="../assets/img/image 39.png"
                    alt="Kitten"
                  />
                </template>
                <b-dropdown-item to="/user/profile">Profile</b-dropdown-item>
                <b-dropdown-item @click="handleLogout">Log Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </header>
    </b-container>
  </b-container>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      inputSearch: ''
    }
  },
  computed: {
    ...mapGetters({ search: 'getSearchProduct' })
  },
  methods: {
    ...mapActions(['logout', 'getProductsSearching']),
    handleLogout() {
      this.logout()
      alert('Success Logout')
    },
    ...mapMutations(['newSearch']),
    searchData() {
      console.log(this.inputSearch)
      // localStorage.setItem('searching', JSON.stringify(this.inputSearch))
      // console.log(this.inputSearch)
      this.newSearch(this.inputSearch)
      this.getProductsSearching()
    }
  }
}
</script>
<style>
header .satisfy {
  font-family: 'Satisfy', cursive;
  font-size: 65px;
}

.header {
  background-color: white;
  position: fixed;
  z-index: 10;
}
.header-set {
  height: 100px;
  background-color: white;
}

.menu-nav {
  color: black;
  margin: auto;
}

#button-content {
  border-radius: 20px;
}

.menunav {
  font-size: 15px;
  color: rgba(106, 64, 41, 1);
  font-weight: 400;
  margin-top: -20px;
  line-height: 50px;
}

.menunav:hover {
  font-size: 20px;
  color: rgba(106, 64, 41, 1);
}

.b-search {
  background-color: rgba(106, 64, 41, 1);
}

.profile-img {
  border-radius: 50%;
}
</style>
