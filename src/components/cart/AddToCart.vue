<template>
  <div>
    <br /><br /><br /><br /><br />
    <b-button v-b-toggle.sidebar-right>Go To My Cart</b-button>
    <b-sidebar id="sidebar-right" title="My Cart" right shadow>
      <ul class="list-group">
        <li class="list-group-item" v-for="item in cart" :key="item.product_id">
          <b-card>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <b-media>
              <template #aside>
                <b-img
                  :src="'http://localhost:3000/' + item.image_src"
                  width="50"
                  alt="placeholder"
                ></b-img>
              </template>

              <h6 class="mt-0">{{ item.product_name }}</h6>
              <p>Price : {{ item.product_price }}</p>
            </b-media>
          </b-card>
        </li>
      </ul>
    </b-sidebar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ cart: 'getCart' })
  }
}
</script>
