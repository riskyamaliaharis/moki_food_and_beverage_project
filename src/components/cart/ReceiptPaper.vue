<template>
  <div>
    <div ref="content" class="receipt">
      <div class="centered">
        <div>
          <h5>MOKI Food & Beverage</h5>
          <p>JL. Sakura Macan No.32</p>
        </div>
        <hr class="line" />
        <b-row>
          <b-col>
            <p>ORDER INVOICE</p>
          </b-col>
          <b-col>MOKI-2345</b-col>
        </b-row>
      </div>
      <hr class="line" />
      <div class="menu">
        <p><b>Soy Bean Cake</b></p>
        <b-row>
          <b-col cols="2">1x</b-col>
          <b-col cols="4">@20000</b-col>
          <b-col cols="5" style="text-align: right">20000</b-col>
        </b-row>
      </div>
      <hr class="line" />
      <b-row>
        <b-col cols="3">
          <p>Tax</p>
          <p>Shipping</p>
          <p>Total</p>
        </b-col>
        <b-col cols="8" style="text-align: right">
          <p>8000</p>
          <p>10000</p>
          <p><b>84000</b></p>
        </b-col>
      </b-row>
    </div>
    <div style="text-align:center">
      <button @click="download">Download</button>
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf'
export default {
  methods: {
    download() {
      var doc = new jsPDF('p', 'pt', 'A4')
      const margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
      }

      doc.fromHTML(this.$refs.content, margins.left, margins.top, {
        width: margins.width
      })

      doc.save('test.pdf')
    }
  }
}
</script>

<style scoped>
.receipt {
  width: 300px;
  background: #eee;
  margin: 20px auto;
  padding: 15px 8px;
  box-shadow: 2px 3px #888888;
}
.centered {
  text-align: center;
}
hr.line {
  border-top: 3px dotted black;
}
button {
  border-radius: 5px;
}
</style>
