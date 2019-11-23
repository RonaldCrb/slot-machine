<template>
  <div>
    <v-card color="cyan">
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="12" align="center" justify="center">
            <h2 class="text-center black--text">
              VUEX STATE
            </h2>
          </v-col>
        </v-row>
        <v-row dense justify="center" align="center">
          <v-col cols="2" class="px-1">
            <v-card color="yellow">
              <v-img :src="image1"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2" class="px-1">
            <v-card color="yellow">
              <v-img :src="image2"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2" class="px-1">
            <v-card color="yellow">
              <v-img :src="image3"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2" class="px-1">
            <v-card color="yellow">
              <v-img :src="image4"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2" class="px-1">
            <v-card color="yellow">
              <v-img :src="image5"></v-img>
            </v-card>
          </v-col>
        </v-row>
        <v-col cols="12">
          <v-card color="yellow" @click="spin">
            <h1 class="black--text text-center">PLAY</h1>
          </v-card>
        </v-col>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import { Howl, Howler } from 'howler'
export default {
  computed: {
    image1() {
      return this.$store.state.machine.image1
    },
    image2() {
      return this.$store.state.machine.image2
    },
    image3() {
      return this.$store.state.machine.image3
    },
    image4() {
      return this.$store.state.machine.image4
    },
    image5() {
      return this.$store.state.machine.image5
    }
  },
  methods: {
    spin() {
      Howler.volume(0)
      const sound = new Howl({
        src: ['https://webiserver.herokuapp.com/public/sound.mp3']
      })
      sound.play()
      this.$store.dispatch('machine/spin')
    }
  }
}
</script>
