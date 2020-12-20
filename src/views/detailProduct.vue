<template>
  <b-container fluid class="main-set bv-example-row">
    <b-breadcrumb>
      <b-breadcrumb-item to="/product">Product</b-breadcrumb-item>
      <b-breadcrumb-item active>{{ product.product_name }}</b-breadcrumb-item>
    </b-breadcrumb>
    <b-container class="detail-page">
      <!-- START FIRST ROW -->
      <b-row>
        <!-- START FIRST COLUMN -->
        <b-col>
          <section>
            <!-- <h6 class="rubik">Favorite & Promo > <strong>Cold Brew</strong></h6> -->
            <img
              class="img-set rounded-circle"
              src="../assets/img/product/image 25.png"
              alt="coldbrew"
            />
            <h2 class="poppins">
              <strong>{{ product.product_name }}</strong>
            </h2>
            <h3>IDR {{ product.product_price }}</h3>
            <br />
            <p>
              Delivery only on Monday to Friday at
            </p>
            <p>
              {{ product.delivery_start_hour }} until
              {{ product.delivery_end_hour }}
            </p>
            <br />
            <div class="button-set">
              <button type="button" class="btn btn-1 rounded btn-md btn-block">
                Add to Cart
              </button>
              <button
                type="button"
                class="btn btn-2 rounded btn-md btn-block"
                v-if="role === 1"
              >
                EDIT
              </button>
            </div>
          </section>
        </b-col>
        <!-- END FIRST COLUMN -->

        <!-- START SECOND COLUMN -->
        <b-col>
          <div class="card-coldbrew2">
            <p>
              {{ product.product_description }}
            </p>
            <h5>Choose a Size</h5>
            <div class="d-flex justify-content-around">
              <button type="button" class="btn btn-sm rounded-circle">R</button>
              <button type="button" class="btn btn-sm rounded-circle">L</button>
              <button type="button" class="btn btn-sm rounded-circle">
                XL
              </button>
            </div>
          </div>
          <div class="card-coldbrew3 mt-5">
            <h6>Choose Delivery and Time</h6>
            <button type="button" class="btn ">Dine In</button>
            <button type="button" class="btn " disabled>Door Delivery</button>
            <button type="button" class="btn " disabled>Pick Up</button>
          </div>
          <div class="input-group input-group-sm mb-3 mt-3 set-time">
            <span class="input-group-text left-time">Set time :</span>

            <input
              type="time"
              class="form-control right-time"
              placeholder="Enter the time you’ll arrived"
            />
          </div>
        </b-col>
        <!-- END SECOND COLUMN -->
      </b-row>
      <!-- END FIRST ROW -->

      <!-- START SECOND ROW -->
      <b-row>
        <!-- START FIRST COLUMN -->
        <b-col lg="6" md="12">
          <div
            class="card-coldbrew4 d-inline-flex flex-row align-items-center justify-content-around flex-wrap"
          >
            <div class="p-2">
              <img
                class="img-coldbrew rounded-circle "
                src="../assets/img/product/image 25.png"
                alt="coldbrew"
              />
            </div>
            <div class="p-1 text-coldbrew ">
              <h6><strong>COLD BREW</strong></h6>
              <p>xl (Large)</p>
              <p>xl (Regular)</p>
            </div>
            <div class="p-2 counter-coldbrew d-flex justify-content-around">
              <button
                id="sub"
                type="button"
                class="btn btn-sm rounded-circle"
                @click="add"
              >
                -
              </button>
              <input type="text" id="qtyBox" readonly="" value="0" />
              <button
                id="add"
                type="button"
                class="btn btn-sm rounded-circle"
                @click="sub"
              >
                +
              </button>
            </div>
          </div>
        </b-col>
        <!-- END FIRST COLUMN -->

        <!-- START SECOND COLUMN -->
        <b-col lg="6" md="12">
          <div class="card-coldbrew5 poppins">
            <input type="button" class="btn" value="CHECKOUT" />
          </div>
        </b-col>
        <!-- END SECOND COLUMN -->
      </b-row>
      <!-- END SECOND ROW -->
    </b-container>
  </b-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      product: '',
      product_id: '',
      role: 2
    }
  },
  created() {
    this.product_id = this.$route.params.id
    console.log(this.$route.params.id)
    this.getProduct()
  },
  methods: {
    add() {
      this.qty.value = parseInt(this.qty.value) + 1
    },
    sub() {
      if (this.qty.value <= 0) {
        this.qty.value = 0
      } else {
        this.qty.value = parseInt(this.qty.value) - 1
      }
    },
    getProduct() {
      axios
        .get(`http://localhost:3000/product/selectproduct/${this.product_id}`)
        .then(response => {
          console.log(response)
          this.product = response.data.data[0]
          console.log(this.product.product_name)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.main-set {
  background-color: white;
  min-height: 700px;
  /* background-color: #bcbaba; */
}
.detail-page {
  min-height: 800px;
  text-align: center;
  padding-top: 80px;
  position: relative;
}

.img-set {
  border-radius: 50%;
  width: 250px;
  padding-top: 10px;
}
.card-coldbrew2 {
  background-color: white;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 50px auto;
  transition: 0.3s;
}

.card-coldbrew2 button {
  width: 30px;
  height: 30px;
  background-color: rgba(255, 186, 51, 1);
  margin-top: 20px;
  margin-bottom: 30px;
}

.card-coldbrew2 button:hover {
  width: 35px;
  height: 35px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.card-coldbrew4,
.card-coldbrew5 {
  transition: 0.3s;
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
}

.card-coldbrew3 {
  width: 300px;
  border-radius: 10px;
  margin: 30px auto;
}

.card-coldbrew4 {
  text-align: center;

  width: 60%;
  height: 130px;

  margin-top: 50px;
  margin-bottom: -80px;
  margin-left: 250px;
}

.card-coldbrew5 {
  text-align: center;

  width: 35%;
  height: 130px;
  /* height: 120px; */
  margin-top: 50px;
  margin-bottom: -80px;
  margin-left: 0px;
}

.card-coldbrew5 input.btn {
  background-color: rgba(255, 186, 51, 1);
  color: rgba(106, 64, 41, 1);
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 5px 0 #999;
  border-radius: 30px;
}

.card-coldbrew5 input.btn:hover {
  background-color: rgba(106, 64, 41, 1);
  color: rgba(255, 186, 51, 1);
}

.card-coldbrew3 .btn {
  background-color: rgba(106, 64, 41, 1);
  color: white;
  box-shadow: 0px 6px 20px rgba(137, 85, 55, 0.4);
}

.card-coldbrew3 .btn:disabled {
  background-color: #f4f4f8;
  color: rgba(159, 159, 159, 1);
}

.card-coldbrew2 p {
  padding: 30px;
}

section {
  padding-top: 60px;
}

.img-coldbrew {
  width: 50px;
  align-self: center;
}

.counter-coldbrew p {
  margin-right: 10px;
  margin-left: 10px;
}

.counter-coldbrew button {
  width: 25px;
  height: 25px;
  background-color: rgba(255, 186, 51, 1);
  padding: 0;
}
.button-set {
  width: 40%;
  margin: 8px auto;
}

.text-coldbrew h6 {
  margin-bottom: 10px;
}

.text-coldbrew p {
  margin-bottom: 5px;
  font-size: 12px;
}

.button-set button.btn-1 {
  background-color: rgba(106, 64, 41, 1);
  color: white;
}

.button-set button.btn-2 {
  background-color: rgba(255, 186, 51, 1);
}

.set-time {
  text-align: center;
  margin: 5px auto;

  width: 300px;
}
.left-time,
.right-time {
  background-color: white;
  border: none;
}
.set-time .right-time {
  border-bottom-width: thick;
  border-bottom-color: black;
}

#qtyBox {
  width: 30px;
  outline: none;
  border: none;
  text-align: center;
}

@media (max-width: 768px) {
  .card-coldbrew4 {
    width: 130px;
    height: 318px;

    margin: 50px auto 20px;
  }

  .card-coldbrew5 {
    width: 130px;
    height: 50px;

    margin: 0px auto 50px;
  }
}

@media (max-width: 992px) {
  .card-coldbrew4 {
    width: 160px;
    height: 318px;

    margin: 50px auto 20px;
  }

  .card-coldbrew5 {
    width: 130px;
    height: 50px;

    margin: 0px auto 50px;
  }
}
</style>
