<template>
  <div>
    <br /><br /><br /><br /><br />
    <button v-b-toggle.sidebar-right class="btn-cart">
      <span>Go To My Cart</span>
    </button>
    <b-sidebar id="sidebar-right" title="My Cart" width="350px" right shadow>
      <ul class="list-group">
        <p style="text-align:left; padding:5px 20px">
          <b style="color: red">Noted</b> : Normal price just for Regular and
          250gr size. Other than that, you have to pay more. Thank you. Enjoy
          your shopping 😊
        </p>
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
              <p>Normal Price : {{ item.product_price }}</p>

              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Size</th>
                    <th scope="col">Qty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(e, i) in item.mycarts" :key="i">
                    <td>{{ e.name }}</td>
                    <td>{{ e.qnt }}</td>
                  </tr>
                </tbody>
              </table>
            </b-media>
          </b-card>
        </li>
        <h5 v-if="total_price != 0">Total : Rp.{{ total_price }},-</h5>

        <img
          width="200px"
          v-else
          src="../../assets/img/ariya-empty-cart.png"
          style="margin-top:60%; margin-left: 90px"
          alt=""
        />
      </ul>
    </b-sidebar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  created() {},
  computed: {
    ...mapGetters({ cart: 'getCart', total_price: 'totalPrice' })
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.btn-cart {
  background-color: rgba(255, 186, 51, 1);
  border: none;
  padding: 20px 20px;
  border-radius: 20px;
}
.btn-cart span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.btn-cart span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.btn-cart:hover span {
  padding-right: 25px;
}

.btn-cart:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
