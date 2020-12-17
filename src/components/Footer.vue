<template>
  <b-container>
    <footer>
      <b-row>
        <b-col cols="7">
          <div class="about">
            <!-- <img class="moki" src="../assets/logo.png" alt="coffee-logo" /> -->
            <div class="description">
              <p class="font-weight-light">
                Coffee Shop is a store that sells some good meals, and
                especially coffee. We provide high quality beans
              </p>
            </div>
            <div class="social-media" vertical-align="end">
              <img src="../assets/img/facebook_logo.png" alt="fb" />
              <img src="../assets/img/twitter_logo.png" alt="twitter" />
              <img src="../assets/img/instagram_logo.png" alt="ig" />
            </div>
            <p class="font-weight-light">&copy;2020CoffeeStore</p>
          </div>
        </b-col>
        <b-col cols="2">
          <div class="product">
            <p class="rubik">Product</p>
            <ul class="rubik ">
              <li><a href="#">Download</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Countries</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
        </b-col>
        <b-col cols="2">
          <div class="engage">
            <p class="rubik">Engage</p>
            <ul class="rubik  ">
              <li><a href="#">Coffee Shop?</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </footer>
  </b-container>
</template>

<style>
.rubik {
  font-family: 'Rubik', sans-serif;
}
.about img.moki {
  margin: 5px 5px;
  width: 100px;
}

/* .about {
  padding-left: 100px;
} */
.about .description p {
  width: 40%;
  word-wrap: break-word;
}
footer {
  height: 200px;
  align-items: flex-end;
  margin: 0 auto;
}
footer .product,
footer .engage {
  flex: 1;
  font-weight: 700;
}
.product li,
.engage li {
  list-style-type: none;
  font-weight: 5;
  font-size: 15px;
  line-height: 2;
}

.product li a,
.engage li a {
  color: black;
}

b-container {
  margin-top: 100px;
}
</style>
