<template>
  <div class="left-side">
    <b-button v-b-toggle.sidebar-1 class="btn-coupon">Get Promo</b-button>
    <b-sidebar id="sidebar-1" title="Promo for you" shadow>
      <div class="px-3 py-2">
        <p class="promo_info">
          Coupons will be updated every weeks. Check them out!
        </p>
        <div class="box1">
          <img
            class="rounded-circle"
            src="../assets/img/product/image 29.png"
            alt="spaghetti"
          />
          <h3 class="poppins">Beef Spaghetti</h3>
          <h3>20% OFF</h3>
          <p class="poppins">
            Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
          </p>
          <div class="line"></div>
          <p>COUPON CODE</p>
          <h2>FNPR15RG</h2>
          <p>Valid untill October 10th 2020</p>
        </div>

        <div class="box2"></div>
        <div class="box3"></div>

        <button class="btn apply_coupon" type="submit">Apply Coupon</button>
        <div id="terms">
          <p class="coupon">Terms and Condition</p>
          <p class="coupon">1. You can only apply 1 coupon per day</p>
          <p class="coupon">2. It only for dine in</p>
          <p class="coupon">3. Buy 1 get 1 only for new user</p>
          <p class="coupon">4. Should make member card to apply coupon</p>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<style>
/* .left-side {
  position: relative;
} */
div.left-side .btn-coupon {
  background-color: black;
  width: 150px;
  position: absolute;
  top: 160px;
}
.promo_info {
  position: absolute;
}

.box1,
.box2,
.box3 {
  border-radius: 20px;
  position: absolute;
  width: 240px;
}
.box1 {
  font-family: 'Rubik', sans-serif;

  height: 420px;
  background-color: #ffcb65;

  top: 150px;
  left: 10px;
  z-index: 3;
  text-align: center;
}

div.box1 img {
  margin-top: 20px;
  width: 100px;
}

.col-lg-3 .box1 p {
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 5px;
}

.col-lg-3 h1.promo_info {
  font-weight: 700;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 0px;
  left: 70px;
  top: 40px;
  z-index: 5;
}
p.promo_info {
  top: 70px;
  z-index: 6;
}

.col-lg-3 p {
  text-align: center;
}

.box2 {
  height: 380px;
  top: 170px;
  left: 30px;
  z-index: 2;
  background-color: black;
}
.box3 {
  z-index: 1;

  height: 300px;
  top: 210px;
  left: 45px;
  background-color: rgba(106, 64, 41, 1);
}

.apply_coupon {
  position: absolute;
  z-index: 5;
  top: 680px;
  left: -18px;
  width: 270px;
  border-radius: 15px;
  background-color: #895537;
  color: white;
}

#terms {
  position: absolute;
  z-index: 6;
  top: 760px;
  left: -18px;
}

#terms .coupon {
  text-align: left;
  font-size: 12px;
  line-height: 0.2;
}
.line {
  border: 1px dashed rgba(106, 64, 41, 1);
  margin-bottom: 10px;
}
</style>
