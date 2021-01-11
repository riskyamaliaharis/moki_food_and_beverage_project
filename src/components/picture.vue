<template>
  <div class="centered">
    <br /><br /><br /><br />

    <!-- <img src="../assets/img/unnamed.png" alt="" />
    <br />
    <b-button class="upload-btn">Take a Picture</b-button>
    <br />
    <br />
    <b-button class="upload-btn">Choose From Galery</b-button> -->

    <div class="picture">
      <div>
        <div v-if="!image">
          <img src="../assets/img/unnamed1.png" alt="" />

          <span class="hiddenFileInput"
            ><input
              type="file"
              id="files"
              hidden
              @change="onFileChange($event)"
              style="display:none"
          /></span>
        </div>
        <div v-else>
          <img :src="image" />
          <!-- <button @click="removeImage">Remove image</button> -->
          <b-button class="upload-btn" @click="removeImage"
            >Remove Image</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      imgSrc: '',
      image: false
    }
  },
  methods: {
    ...mapMutations(['changeImage']),
    onFileChange(e) {
      this.imgSrc = e.target.files[0]
      this.changeImage(this.imgSrc)
      var files = e.target.files || e.dataTransfer.files
      console.log(files)
      if (!files.length) return
      this.createImage(files[0])
    },
    createImage(file) {
      var reader = new FileReader()
      reader.onload = e => {
        this.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function() {
      this.image = false
    }
  }
}
</script>

<style scoped>
div.picture {
  text-align: center;
  border-radius: 10px;
  box-shadow: black;
  width: 80%;
  height: 400px;
  background-color: rgba(255, 186, 51, 1);
  padding-top: 80px;
}
.picture img {
  width: 200px;
  height: 200px;
  margin: auto;
  display: block;
  margin-bottom: 10px;
  border-radius: 50%;
}
div.centered {
  text-align: center;
}
div.centered img {
  width: 200px;
}
div.centered .upload-btn {
  width: 300px;
}

.hiddenFileInput > input {
  height: 100%;
  width: 100;
  opacity: 0;
  cursor: pointer;
}
.hiddenFileInput {
  border: 1px solid #ccc;
  width: 80px;
  height: 60px;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
  background-color: rgba(255, 186, 51, 1);
}
</style>
