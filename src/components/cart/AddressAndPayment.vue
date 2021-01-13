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
          <div class="p-4 form-check ">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
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
      <input class="btn btn-primary" type="submit" value="Confirm and Pay  " />
    </div>
  </div>
</template>

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
