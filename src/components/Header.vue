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
          <b-navbar-brand class="satisfy">Moki</b-navbar-brand>

          <b-navbar-toggle
            class="dd"
            target="nav-collapse"
            v-if="isLogin"
          ></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav v-if="isLogin">
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
              <b-nav-item v-if="user.user_role === 0"
                ><router-link class="menunav" to="/cart"
                  >Your Cart</router-link
                ></b-nav-item
              >
              <b-nav-item v-if="user.user_role === 0"
                ><router-link class="menunav" to="/history"
                  >History</router-link
                ></b-nav-item
              >
              <b-nav-item v-if="user.user_role === 1"
                ><router-link class="menunav" to="/admin/history"
                  >Order</router-link
                ></b-nav-item
              >
              <b-nav-item v-if="user.user_role === 1"
                ><router-link class="menunav" to="/admin/dashadmin"
                  >Dashboard</router-link
                ></b-nav-item
              >
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input
                  size="sm"
                  class="mr-sm-2 search"
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
                <template #button-content>
                  <img
                    style="width:40px;height:40px"
                    class="profile_img"
                    :src="`http://${url}/user/${profile.user_photo}`"
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
  created() {
    this.getProfileVuex(this.user.user_id)
  },
  data() {
    return {
      inputSearch: '',
      url: process.env.VUE_APP_ROOT_URL
    }
  },
  computed: {
    ...mapGetters({
      search: 'getSearchProduct',
      user: 'setUser',
      isLogin: 'isLogin',
      profile: 'myProfile'
    })
  },
  methods: {
    ...mapActions(['logout', 'getProfileVuex', 'getProductsSearching']),
    handleLogout() {
      this.logout()
      this.$router.push('/')
    },
    ...mapMutations(['newSearch']),
    searchData() {
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
.btn img {
  padding-top: 10px;
  object-fit: cover;
}
img.profile_img {
  border-radius: 50%;
}
#nav-collapse {
  background: white;
  padding-left: 50px;
}
</style>
