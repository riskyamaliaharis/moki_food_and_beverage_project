<template>
  <div class="history-wrapper">
    <VueSlickCarousel v-bind="settings" v-if="getHistories.length > 0">
      <div v-for="(item, index) in getHistories" :key="index">
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
            <h1 class="text-center">Delete History</h1>
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
            <h1 class="text-center">Delete History</h1>
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
                :src="`${url}${el.image_src}`"
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
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { alert } from '../../mixins/alert'
import moment from 'moment'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  mixins: [alert],
  components: { VueSlickCarousel },
  created() {
    this.getHistoriesVuex(this.user.user_id)
  },
  data() {
    return {
      url: process.env.VUE_APP_ROOT_URL,
      settings: {
        centerMode: true,
        centerPadding: '10px',
        infinite: true,
        slidesToShow: 5,
        arrows: false,
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: false,
        // autoplaySpeed: 4000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              centerPadding: '-40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 1025,
            settings: {
              centerPadding: '-6px',
              slidesToShow: 4
            }
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      getHistories: 'setMyHistories',
      user: 'setUser'
    })
  },
  methods: {
    ...mapActions(['getHistoriesVuex', 'delHistory']),
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
          this.getHistoriesVuex(this.user.user_id)
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
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
  height: 500px;
}
hr.line {
  border-top: 3px dotted black;
}
.mini-card {
  background: white;
  padding: 12px;
  border-radius: 10px 0 10px 0;
  margin-right: 20px;
  height: 450px;
  overflow: auto;
  margin-bottom: 20px;
}
</style>
