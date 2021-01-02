<template>
  <b-container fluid class="footer">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
      rel="stylesheet"
    />
    <b-container id="footer-set">
      <footer class="container">
        <b-row>
          <b-col
            lg="6"
            md="4"
            sm="12"
            order-lg="0"
            order-md="0"
            order-sm="3"
            order-xs="3"
          >
            <div class="about">
              <!-- <img src="../img/coffee 1.png" alt="coffee-logo" /> -->
              <p class="satisfy">Moki</p>
              <div class="description">
                <p class="font-weight-light">
                  Coffee Shop is a store that sells some good meals, and
                  especially coffee. We provide high quality beans
                </p>
              </div>

              <div class="social-media">
                <img src="../assets/img/facebook_logo.png" alt="fb" />
                <img src="../assets/img/twitter_logo.png" alt="twitter" />
                <img src="../assets/img/instagram_logo.png" alt="ig" />
              </div>
              <p class="font-weight-light">&copy;2020CoffeeStore</p>
            </div>
          </b-col>
          <b-col
            lg="3"
            md="4"
            sm="12"
            order-lg="1"
            order-md="1"
            order-sm="0"
            order-xs="0"
          >
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

          <b-col
            lg="3"
            md="4"
            sm="12"
            order-lg="2"
            order-md="2"
            order-sm="2"
            order-xs="2"
          >
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
  </b-container>
</template>

<style>
.footer {
  background-color: white;
  padding-top: 50px;
}
.rubik {
  font-family: 'Rubik', sans-serif;
}
.about .satisfy {
  font-family: 'Satisfy', cursive;
  font-size: 30px;
}
.about img.moki {
  margin: 5px 5px;
  width: 100px;
}

.about .description p {
  width: 40%;
  word-wrap: break-word;
}
footer {
  height: 200px;
  margin: 0 auto;
}
footer .product,
footer .engage {
  /* flex: 1; */
  font-weight: 700;
}

.product li,
.engage li {
  list-style-type: none;
  font-weight: 5;
  font-size: 15px;
  line-height: 2;
  margin-left: 55px;
}

.product li a,
.engage li a {
  color: black;
}

b-container {
  margin-top: 100px;
}

@media (max-width: 576px) {
}

@media (max-width: 768px) {
  .product li,
  .engage li {
    font-size: 12px;
    line-height: 2;
  }

  .about .description p {
    width: 100%;
    font-size: 12px;
  }

  #footer-set .about p {
    font-size: 13px;
  }

  #footer-set .about {
    text-align: center;
  }

  #footer-set .product ul,
  #footer-set .engage ul {
    text-align: center;
    margin-left: -70px;
  }

  footer {
    padding-top: 20px;
  }

  .social-media img {
    width: 20px;
  }
}

@media (max-width: 992px) {
  .product li,
  .engage li {
    margin-left: 35px;
  }
}
</style>
