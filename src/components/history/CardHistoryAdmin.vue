<template>
  <div class="history-wrapper">
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
            <b-row>
              <b-col cols="9">
                <div class="status1" v-if="item.status == 0">On Progress</div>
                <div class="status2" v-if="item.status == 1">Done</div>
              </b-col>
              <b-col cols="3">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  v-b-modal="modalId(index)"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </b-col>
            </b-row>

            <b-modal
              v-if="item.status == 1"
              :id="'modal' + index"
              hide-footer
              hide-header
            >
              <h1 class="text-center">Delete Coupon</h1>
              <h6 class="my-4 text-center">
                Are you sure you want to delete this item?
              </h6>
              <b-row align-h="end">
                <b-col cols="3"
                  ><b-button
                    variant="primary"
                    block
                    @click="$bvModal.hide('modal' + index)"
                    >No</b-button
                  ></b-col
                >
                <b-col cols="3"
                  ><b-button
                    @click="deleteHistory(item.order_id)"
                    variant="danger"
                    block
                    >Yes</b-button
                  ></b-col
                >
              </b-row>
            </b-modal>
            <b-modal
              v-else-if="item.status == 0"
              :id="'modal' + index"
              hide-footer
              hide-header
            >
              <h1 class="text-center">Delete Coupon</h1>
              <h6 class="my-4 text-center">
                You cannot delete this item until status is changed being 'DONE'
              </h6>
              <b-row align-h="end">
                <b-col cols="3"
                  ><b-button
                    variant="primary"
                    block
                    @click="$bvModal.hide('modal' + index)"
                    >OK</b-button
                  ></b-col
                >
              </b-row>
            </b-modal>
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
import { alert } from '../../mixins/alert'
import moment from 'moment'
export default {
  mixins: [alert],
  created() {
    this.getAllHistoriesVuex()
  },
  computed: {
    ...mapGetters({
      getAllHistories: 'setAllHistories',
      user: 'setUser'
    })
  },
  methods: {
    ...mapActions(['getAllHistoriesVuex', 'delHistory']),
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
    },
    async deleteHistory(id) {
      await this.delHistory(id)
        .then(result => {
          this.successAlert(result.data.msg)
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })

      await this.getAllHistoriesVuex()
    },
    modalId(index) {
      return 'modal' + index
    }
  }
}
</script>

<style scoped>
.status1,
.status2 {
  width: 95%;
}
.status1 {
  background: red;
  color: white;
}
.status2 {
  background: rgb(93, 187, 5);
  color: black;
}
.history-wrapper {
  height: 800px;
}
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
