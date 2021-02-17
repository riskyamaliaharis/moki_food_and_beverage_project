<template>
  <div class="box-details">
    <div class="d-flex flex-column ">
      <div class=" d-flex p-2 justify-content-between">
        <h4 class="p-2 title-box1 poppins">Address Details</h4>
        <a class="p-2 align-bottom" href="">edit</a>
      </div>
      <div class="p-2 box-address-details">
        Delivery to Iskandar Street Km 5 refinery road oppsite re public road,
        effurun, Jakarta +62 81348287878
      </div>
      <div class="d-flex flex-column ">
        <h4 class="p-3">Payment Method</h4>
        <div class="box-payment-method">
          <div class="p-4 form-check " aria-required="true">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              required="required"
            />
            <label class="form-check-label media" for="inlineRadio1">
              <span class="fa fa-credit-card fa-2x mr-3 align-self-top"></span>
              <div class="media-body">
                <p class="mt-0 ">Card</p>
              </div>
            </label>
          </div>
          <div class="p-4 form-check ">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option2"
            />
            <label class="form-check-label media" for="inlineRadio1">
              <span class="fa fa-university fa-2x mr-3 align-self-top"></span>
              <div class="media-body">
                <p class="mt-0 ">Bank account</p>
              </div>
            </label>
          </div>
          <div class="p-4 form-check ">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option2"
            />
            <label class="form-check-label media" for="inlineRadio1">
              <span class="fa fa-truck fa-2x mr-3 align-self-top"></span>
              <div class="media-body">
                <p class="mt-0 ">Cash on delivery</p>
              </div>
            </label>
          </div>
        </div>
      </div>
      <input
        class="btn btn-primary"
        type="button"
        value="Confirm and Pay"
        @click="wannaOrder"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { alert } from '../../mixins/alert'
export default {
  mixins: [alert],
  computed: {
    ...mapGetters({
      user: 'setUser',
      cart: 'getCart'
    })
  },
  methods: {
    ...mapActions(['postOrderVuex', 'postHistoryVuex']),
    async wannaOrder() {
      const invoice = 'MOKI-' + Math.round(Math.random() * 9456)
      await this.postOrderVuex({ invoice, id: this.user.user_id })
        .then(result => {
          this.successAlert(result.data.msg)
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
      const mydataorder = []
      const data = this.cart
      for (let i = 0; i < data.length; i++) {
        let mine = {
          product_id: data[i].product_id,
          total: 0,
          qty: 0
        }
        for (let j = 0; j < data[i].mycarts.length; j++) {
          mine.total = mine.total + data[i].mycarts[j].total
          mine.qty = mine.qty + data[i].mycarts[j].qnt
        }
        mydataorder.push(mine)
      }
      console.log(mydataorder)
      await this.postHistoryVuex(mydataorder)
    }
  }
}
</script>

<style scoped>
.box-details {
  margin-top: 250px;
}
.box-address-details {
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 100px;
  padding: 5px;
  overflow: auto;
}

.box-payment-method {
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
}

.box-payment-method .p-2 {
  padding-left: 15px;
}

div.box-details h4 {
  font-weight: bold;
  font-size: 25px;
  line-height: 37px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
}

div.box-details a {
  color: #ffffff;
}

.fa-credit-card,
.fa-university,
.fa-truck {
  border-radius: 5px;
  border: 5px;
  border-width: 50px;
}

.box-details .btn {
  border-radius: 10px;
  background-color: rgba(137, 85, 55, 1);
  margin-top: 15px;
  width: 100%;
  height: 50px;
  box-shadow: 0px 10px 20px rgba(137, 85, 55, 0.4);
  margin-bottom: 50px;
  border-color: rgba(137, 85, 55, 1);
}

.box-details .btn:hover {
  background-color: white;
  color: rgba(137, 85, 55, 1);
}

@media (max-width: 992px) {
  .box-details {
    margin-top: 50px;
  }
}
</style>
