<template>
  <div class="left-side centered">
    <div class="left-profile">
      <!-- <img src="../../assets/img/unnamed.png" alt="" /> -->
      <div>
        <div class="image-user">
          <div>
            <div v-if="!image">
              <img
                :src="
                  profile.user_photo
                    ? `${url}user/${profile.user_photo}`
                    : '../../assets/img/unnamed.png'
                "
              />
              <input
                type="file"
                @change="onFileChange($event)"
                style="display:none"
                class="hidden"
                id="files"
              />
              <br />
              <h6>
                <b>{{ profile.user_name }}</b>
              </h6>
              <h6>{{ profile.email }}</h6>
              <label class="uploadPicture" for="files"
                >Select From Galery</label
              >
            </div>
            <div v-else>
              <img :src="image" />
              <h6>
                <b>{{ profile.user_name }}</b>
              </h6>
              <h6>{{ profile.email }}</h6>
              <br />
              <b-button class="upload-btn" @click="removeImage"
                >Remove Image</b-button
              >
            </div>
          </div>
        </div>
      </div>
      <br />
      <input
        class="btn change-pass d"
        type="button"
        value="Edit Password"
        v-b-toggle.collapse-1
        @click="updateKey"
      />
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <label for="new-pass">New Password</label>
          <b-form-input
            id="new-pass"
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            v-model="dataChange.newPassword"
          ></b-form-input>
          <label for="confirm-pass">Confirm New Password</label>
          <b-form-input
            type="password"
            id="confirm-pass"
            v-model="dataChange.confirmPassword"
          ></b-form-input>
          <div style="text-align:right">
            <b-button style="margin-top:10px" @click="savePassword" block
              >Save</b-button
            >
          </div>
        </b-card>
      </b-collapse>
      <br />
      <h6>Do you want to save the change?</h6>
      <input
        @click="updateProfile"
        class="btn save f"
        type="button"
        value="Save Change"
      />
      <br /><br />
      <input
        class="btn cancel g"
        type="button"
        value="Cancel"
        @click="cancel"
      />
      <br /><br />
      <input
        class="btn logout h"
        type="button"
        value="Logout"
        @click="Logout"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { alert } from '../../mixins/alert'
export default {
  mixins: [alert],
  data() {
    return {
      dataChange: {
        key: 0,
        newPassword: '',
        confirmPassword: ''
      },
      pict: '',
      image: false,
      url: process.env.VUE_APP_ROOT_URL
    }
  },
  computed: {
    ...mapGetters({ profile: 'myProfile', user: 'setUser' })
  },
  methods: {
    ...mapActions(['patchProfileVuex', 'logout', 'changePassBecauseForgot']),
    onFileChange(e) {
      this.pict = e.target.files[0]
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
    },

    updateProfile() {
      let {
        user_name,
        user_key,
        first_name,
        last_name,
        user_photo,
        user_birthdate,
        mobile,
        gender,
        address
      } = this.profile
      user_photo = this.pict
      const data = new FormData()
      data.append('user_name', user_name)
      data.append('user_key', user_key)
      data.append('first_name', first_name)
      data.append('last_name', last_name)
      data.append('user_birthdate', user_birthdate)
      data.append('mobile', mobile)
      data.append('address', address)
      data.append('gender', gender)
      data.append('user_photo', user_photo)
      this.patchProfileVuex({ id: this.user.user_id, data })
        .then(result => {
          this.successAlert(result.data.msg)
        })
        .catch(err => {
          this.errorAlert(err.data.msg)
        })
    },

    cancel() {
      this.$router.push('/product')
    },
    Logout() {
      this.logout()
      this.$router.push('/login')
    },
    updateKey() {
      const generatekey = Math.round(Math.random() * 993275)
      this.dataChange.key = generatekey
      const data = {
        user_key: generatekey,
        user_name: '',
        first_name: '',
        last_name: '',
        mobile: '',
        user_birthdate: '',
        gender: '',
        address: '',
        user_photo: ''
      }

      this.patchProfileVuex({
        id: this.user.user_id,
        data
      })
    },
    savePassword() {
      this.changePassBecauseForgot(this.dataChange)
        .then(result => {
          this.successAlert(result.data.msg)
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
    }
  }
}
</script>

<style scoped>
.uploadPicture {
  cursor: pointer;
}
.image-user {
  margin-top: 20px;
}
.centered {
  text-align: center;
}
.left-side img {
  margin-top: 40px;
  width: 170px;
  height: 170px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}

.left-profile {
  margin-top: 35px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  background-color: white;
  border-radius: 10px;
}
.btn.b,
.btn.c,
.btn.d {
  margin-bottom: 15px;
}

.b {
  background-color: rgba(255, 186, 51, 1);
}

.c {
  background-color: #6a4029;
  color: white;
}

.c:hover,
.f:hover {
  background-color: rgba(255, 186, 51, 1);
  color: #6a4029;
}

.d,
.h {
  border-color: #6a4029;
  color: #6a4029;
  border-radius: 10px;
}

.f {
  background-color: #6a4029;
  border-radius: 10px;
  color: white;
  margin: 0;
}

.g {
  background-color: rgba(255, 186, 51, 1);
  border-radius: 10px;
  color: #6a4029;
}

.d,
.f,
.g,
.h {
  width: 140px;
}
</style>
