<template>
  <div class="YouCart">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Header />

    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item href="#bar">Favorite&Promo</b-breadcrumb-item>
        <b-breadcrumb-item active>Cold Brew</b-breadcrumb-item>
      </b-breadcrumb>
      <main>
        <b-row>
          <b-col>
            <div class="left-side">
              <div>
                <b-img-lazy
                  v-bind="mainProps"
                  :src="getImageUrl(80)"
                  alt="Image 1"
                ></b-img-lazy>
              </div>
              <div>
                <b-button variant="danger">Button</b-button>
              </div>
              <div>
                <b-button variant="danger">Button</b-button>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="right-side">
              <div class="box-product" rounded>
                <section>Time</section>
                <section>Description</section>
                <section>
                  <b-form-group
                    label="Button style radios"
                    v-slot="{ ariaDescribedby }"
                  >
                    <b-form-radio-group
                      id="btn-radios-1"
                      v-model="selected"
                      :options="options"
                      :aria-describedby="ariaDescribedby"
                      name="radios-btn-default"
                      buttons
                    ></b-form-radio-group>
                  </b-form-group>
                </section>
              </div>
              <br />
              <br />
              <div>
                <b-button-group size="sm" mt-5>
                  <b-button
                    v-for="(btn, idx) in buttons"
                    :key="idx"
                    :pressed.sync="btn.state"
                    variant="primary"
                    mr-2
                  >
                    {{ btn.caption }}
                  </b-button>
                </b-button-group>
                <p>
                  Pressed States: <strong>{{ btnStates }}</strong>
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
      </main>
    </b-container>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// import axios from 'axios'

export default {
  name: 'YouCart',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
        width: 600,
        height: 400,
        class: 'my-5'
      },
      myToggle: false,
      buttons: [
        { caption: 'Dine In', state: true },
        { caption: 'Door Delivery', state: false },
        { caption: 'Pick Up', state: true }
      ],
      selected: 'radio1',
      options: [
        { text: 'R', value: 'radio1' },
        { text: 'L', value: 'radio2' },
        { text: 'XL', value: 'radio4' }
      ]
    }
  },
  computed: {
    btnStates() {
      return this.buttons.map(btn => btn.state)
    }
  },
  methods: {
    getImageUrl(imageId) {
      const { width, height } = this.mainProps
      return `https://picsum.photos/${width}/${height}/?image=${imageId}`
    }
  }
}
</script>
<style scoped>
.box-product {
  width: 300px;
  height: 400px;
  box-shadow: 7px 7px 10px;
}
main {
  min-height: 600px;
}
</style>
