<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="jumbotron">
      <b-container>
        <h1 class="title">
          <strong>Start Your Day with Coffee and Good Meals</strong>
        </h1>
        <p>
          We provide high quality beans, good taste, and healthy meals made by
          love just for you. Start your day with us for a bigger smile!
        </p>
        <b-button class="sign up" to="/signup">Sign Up</b-button>
        <b-button class="sign in" to="/login" variant="warning">Login</b-button>
        <div class="data-long-card">
          <b-row align-h="center">
            <b-col>
              <div>
                <i class="fa fa-user staff fa-2x"></i><br /><span
                  >90+ staff</span
                >
              </div>
            </b-col>
            <b-col>
              <div>
                <i class="fa fa-map-marker staff fa-2x"></i><br /><span
                  >90+ stores</span
                >
              </div>
            </b-col>
            <b-col>
              <div>
                <i class="fa fa-heart staff fa-2x"></i><br /><span
                  >90+ users</span
                >
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
  </div>
</template>

<style scoped>
.jumbotron {
  background-image: url('../../assets/img/product/nathan-dumlao-71u2fOofI-U-unsplash 2.png');
  background-size: cover;
  height: 500px;
  padding-top: 180px;
  position: relative;
}
h1.title,
.jumbotron p {
  max-width: 450px;
  color: white;
}
.data-long-card {
  background-color: white;
  position: absolute;
  width: 75%;
  top: 100px;
  text-align: center;
  padding: 20px;
  box-shadow: 2px 2px 8px 1px rgb(155, 154, 154);
  border-radius: 10px;
  z-index: 6;
}
.staff {
  background-color: rgba(255, 186, 51, 1);
  width: 50px;
  height: 50px;
  text-align: center;
  color: white;
  border-radius: 50%;
  margin-right: 10px;
}
.fa {
  padding-top: 11px;
}
.sign {
  margin-right: 20px;
  border: none;
  width: 120px;
  height: 40px;
  padding: auto;
  font-weight: 500;
}
.sign.up {
  background-color: #6a4029;
}
@media only screen and (min-width: 576px) {
  .data-long-card {
    top: 480px;
  }
}
@media only screen and (max-width: 577px) {
  .data-long-card {
    top: 450px;
  }
  h1.title {
    font-size: 30px;
  }
}
@media only screen and (max-width: 400px) {
  .data-long-card {
    top: 500px;
  }
}
</style>
