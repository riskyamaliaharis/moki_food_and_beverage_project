<template>
  <div>
    <div class="card">
      <div class="card-history">
        <b-row>
          <b-col>1 of 2</b-col>
          <b-col>2 of 2</b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 600px;
  max-width: 500px;
  background-color: white;
  overflow: auto;
  border-radius: 20px;
  box-shadow: 3px 3px #888888;
  margin: 0 auto;
  padding: 30px;
}

.card-history {
  width: 80%;
  border-radius: 10px;
}

@media (max-width: 576px) {
  .card {
    width: 300px;
  }
}
</style>
