<template>
  <div class="centered">
    <br /><br /><br /><br />

    <div class="picture">
      <div>
        <div v-if="!image">
          <img src="../assets/img/unnamed1.png" alt="" />

          <input
            type="file"
            id="files"
            class="hidden"
            @change="onFileChange($event)"
            style="display:none"
          />
          <label class="uploadimg" for="files">Select From Galery</label>
        </div>
        <div v-else>
          <img :src="image" />
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
  width: 300px;
  margin: 0 auto;
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
label.uploadimg {
  background-color: rgba(106, 64, 41, 1);
  color: white;
  width: 180px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  padding-top: 10px;
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
