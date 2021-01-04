<template>
  <div class="right-side">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="right-profile">
      <button type="reset" class="btn edit rounded-circle">
        <i class="fa fa-edit"></i>
      </button>
      <h4>Contacts</h4>

      <b-row>
        <b-col>
          <label for="email">Email Address :</label>
          <b-form-input id="email" class="text-input"></b-form-input>

          <label for="address">Delivery Address :</label>
          <b-form-input id="address" class="text-input"></b-form-input>
        </b-col>

        <b-col>
          <label for="mobile">Mobile Number :</label>
          <b-form-input id="mobile" class="text-input-right"></b-form-input>
        </b-col>
      </b-row>
      <br /><br />
      <h4>Details</h4>
      <b-row>
        <b-col>
          <label for="name">Display Name :</label>
          <b-form-input id="name" class="text-input"></b-form-input>

          <label for="firstname">First Name :</label>
          <b-form-input id="firstname" class="text-input"></b-form-input>

          <label for="lastname">Last Name :</label>
          <b-form-input id="lastname" class="text-input"></b-form-input>
        </b-col>
        <b-col>
          <label for="birthdate">DD/MM/YY :</label>
          <b-form-datepicker
            id="birthdate"
            class="text-input-right"
          ></b-form-datepicker>
        </b-col>
      </b-row>
      <form class="gender">
        <label class="radio-inline">
          <input type="radio" name="optradio" checked />Male
        </label>
        <label class="radio-inline">
          <input type="radio" name="optradio" />Female
        </label>
      </form>
    </div>
  </div>
</template>

<style scoped>
.text-input {
  width: 300px;
}

.text-input-right {
  width: 200px;
}

h4 {
  margin-bottom: 40px;
}
.right-profile {
  box-shadow: 2px 2px 8px 2px #888888;
  max-width: 600px;
  padding: 20px;
  border-radius: 10px;
  border-bottom: 15px solid #6a4029;
  margin-top: 220px;
  margin-bottom: 100px;
  background-color: white;
}

label {
  font-size: 15px;
  font-weight: 560;
  color: rgb(160, 156, 156);
}

.gender {
  margin-top: 20px;
  text-align: center;
}

.gender .radio-inline {
  margin-right: 50px;
  margin-left: 50px;
}

.edit {
  width: 30px;
  height: 30px;
  background-color: #6a4029;
  color: white;
  padding: 0;
  float: right;
  margin-top: 5px;
  margin-right: 5px;
}

.edit:hover {
  width: 32px;
  height: 32px;
  color: rgba(255, 186, 51, 1);
}
</style>
