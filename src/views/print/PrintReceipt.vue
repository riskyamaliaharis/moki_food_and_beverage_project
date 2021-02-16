<template>
  <div>
    <b-container>
      <div class="centered">
        <MyReceipt />
      </div>
    </b-container>
  </div>
</template>

<script>
import MyReceipt from '@/components/cart/ReceiptPaper.vue'
export default {
  components: {
    MyReceipt
  }
}
</script>

<style scoped>
.centered {
  margin: 0 auto;
}
</style>
