<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <!-- <b-jumbotron
      class="jumbotron"
      header="BootstrapVue"
      lead="Bootstrap v4 Components for Vue.js 2"
    >
      <p>For more information visit website</p>
      <b-button variant="primary" href="#">More Info</b-button>
    </b-jumbotron> -->
    <div class="jumbotron">
      <b-container>
        <h1 class="title">
          <strong>Start Your Day with Coffee and Good Meals</strong>
        </h1>
        <p>
          We provide high quality beans, good taste, and healthy meals made by
          love just for you. Start your day with us for a bigger smile!
        </p>
        <b-button class="sign up" to="/signup" href="#">Sign Up</b-button>
        <b-button class="sign in" to="/login" variant="warning" href="#"
          >Login</b-button
        >
        <div class="data">
          <b-row align-h="center">
            <b-col>
              <div class="">
                <i class="fa fa-user staff fa-2x"></i
                ><span><b>90+ staff</b></span>
              </div>
            </b-col>
            <b-col>
              <div class="">
                <i class="fa fa-map-marker staff fa-2x"></i
                ><span>90+ stores</span>
              </div>
            </b-col>
            <b-col>
              <div class="">
                <i class="fa fa-heart staff fa-2x"></i><span>90+ users</span>
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
}
h1.title,
.jumbotron p {
  max-width: 450px;
  color: white;
}
.data {
  background-color: white;
  position: absolute;
  bottom: 110px;
  width: 80%;
  text-align: center;
  padding: 20px;
  box-shadow: 2px 2px 8px 1px rgb(155, 154, 154);
  border-radius: 10px;
}
.staff {
  background-color: rgba(255, 186, 51, 1);
  width: 50px;
  height: 50px;
  padding: 8px;
  text-align: center;
  color: white;
  border-radius: 50%;
  margin-right: 10px;
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
</style>
