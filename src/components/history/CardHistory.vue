<template>
  <div>
    <div>
      <b-row>
        <b-col
          xl="3"
          lg="4"
          md="4"
          sm="5"
          xs="12"
          v-for="(item, index) in getHistories"
          :key="index"
        >
          <div class="mini-card">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h5>{{ item.order_invoice }}</h5>

            <p>
              {{ formatTime(item.order_created_at) }},
              {{ formatTime1(item.order_created_at) }}
            </p>
            <em>{{ formatTime2(item.order_created_at) }}</em>
            <hr class="line" />
            <b-media v-for="(el, i) in item.detail" :key="i">
              <template #aside>
                <b-img
                  :src="'http://localhost:3000/' + el.image_src"
                  width="40"
                  alt="placeholder"
                ></b-img>
              </template>

              <h6 class="mt-0">{{ el.product_name.toUpperCase() }}</h6>
              <p class="mb-0">Quantity : {{ el.qty }}</p>
              <p>Subtotal : {{ el.total }}</p>
            </b-media>
            <hr class="line" />

            <h6><b>TOTAL</b> : {{ item.subtotal }}</h6>
            <p>*total includes tax & shipping</p>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
export default {
  created() {
    this.getHistoriesVuex(this.user.user_id)
  },
  computed: {
    ...mapGetters({
      getHistories: 'setMyHistories',
      user: 'setUser'
    })
  },
  methods: {
    ...mapActions(['getHistoriesVuex']),
    formatTime(value) {
      moment.locale('en')
      return moment(String(value)).format('dddd')
    },
    formatTime1(value) {
      moment.locale('en')
      return moment(String(value)).format('LL')
    },
    formatTime2(value) {
      moment.locale('en')
      return moment(String(value)).calendar()
    }
  }
}
</script>

<style scoped>
hr.line {
  border-top: 3px dotted black;
}
.mini-card {
  background: white;
  padding: 12px;
  border-radius: 10px 0 10px 0;
  height: 450px;
  overflow: auto;
  margin-bottom: 20px;
}
</style>
