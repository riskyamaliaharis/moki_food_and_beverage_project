<template>
  <div class="login bg">
    <div class="verify">
      <b-container fluid>
        <b-row align-h="center">
          <b-col xl="5" lg="6" md="6" sm="10" cols="10">
            <Verify />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Verify from '@/components/signup/VerifyComponent.vue'

export default {
  name: 'Verification',
  components: {
    Verify
  }
}
</script>

<style scoped>
div.col {
  padding: 0;
}

.verify {
  background-image: url('../../assets/img/product/nani-williams-6PpLqUlCA0s-unsplash 1.png');
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 22% 0;
}
</style>
