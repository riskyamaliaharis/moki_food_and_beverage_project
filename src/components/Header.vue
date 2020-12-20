<template>
  <b-container>
    <header>
      <b-navbar toggleable="lg" class="header-set">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

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
                >You Cart</router-link
              ></b-nav-item
            >
            <b-nav-item
              ><router-link class="menunav" to="/payment"
                >Payment</router-link
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
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0 b-search" type="submit"
                >Search</b-button
              >
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
}

.menunav:hover {
  font-size: 20px;
  color: rgba(106, 64, 41, 1);
  font-weight: 700;
}

.b-search {
  background-color: rgba(106, 64, 41, 1);
}

.profile-img {
  border-radius: 50%;
}
</style>
