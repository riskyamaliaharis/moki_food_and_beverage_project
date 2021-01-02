<template>
  <div class="d-flex flex-column box-payment">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap"
      rel="stylesheet"
    />
    <div class="p-2 poppins order-summary">
      <strong>Order Summary</strong>
    </div>
    <div class="order-list"></div>
    <div class="table-responsive-sm">
      <table class="table">
        <tbody>
          <tr>
            <td>SUBTOTAL</td>
            <td>IDR 120.000</td>
          </tr>
          <tr>
            <td>TAX & FEES</td>
            <td>IDR 20.000</td>
          </tr>
          <tr>
            <td>SHIPPING</td>
            <td>IDR 10.000</td>
          </tr>
          <tr>
            <td><strong>TOTAL</strong></td>
            <td><strong>IDR 150.000</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.order-list {
  background-color: #eee;
  width: 80%;
  height: 200px;
  margin: 0 auto;
  border: none;
  overflow: auto;
}

.box-payment {
  margin-top: 50px;
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.35);
  border-radius: 20px;
}
.poppins {
  font-family: 'Poppins', sans-serif;
}
.box-payment .p-2 {
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  line-height: 52px;
}
</style>
