<template>
  <div>
    <v-card color="cyan">
      <v-container fluid>
        <v-layout wrap justify-center>
          <v-flex xs12>
            <v-card-title
              ><h2 class="text-center black--text">
                This Slot Machine works with Vuex data
              </h2></v-card-title
            >
          </v-flex>
          <v-flex xs2 pa-2 ma-2>
            <v-card color="yellow">
              <v-img :src="image1" :alt="toString(value1)"></v-img>
            </v-card>
          </v-flex>
          <v-flex xs2 pa-2 ma-2>
            <v-card color="yellow">
              <v-img :src="image2" :alt="toString(value2)"></v-img>
            </v-card>
          </v-flex>
          <v-flex xs2 pa-2 ma-2>
            <v-card color="yellow">
              <v-img :src="image3" :alt="toString(value3)"></v-img>
            </v-card>
          </v-flex>
          <v-flex xs2 pa-2 ma-2>
            <v-card color="yellow">
              <v-img :src="image4" :alt="toString(value4)"></v-img>
            </v-card>
          </v-flex>
          <v-flex xs2 pa-2 ma-2>
            <v-card color="yellow">
              <v-img :src="image5" :alt="toString(value5)"></v-img>
            </v-card>
          </v-flex>
          <v-flex xs2 pa-2 ma-2>
            <v-btn class="black--text" color="yellow" @click="spin">spin</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import { Howl, Howler } from 'howler'
export default {
  data() {
    return {
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      image5: ''
    }
  },
  computed: {
    value1() {
      return this.$store.state.machine.value1
    },
    value2() {
      return this.$store.state.machine.value2
    },
    value3() {
      return this.$store.state.machine.value3
    },
    value4() {
      return this.$store.state.machine.value4
    },
    value5() {
      return this.$store.state.machine.value5
    }
  },
  methods: {
    spin() {
      Howler.volume(0.5)
      const sound = new Howl({
        src: ['https://webiserver.herokuapp.com/public/sound.mp3']
      })
      sound.play()
      this.$store.dispatch('machine/spin')
      this.imageSwitcher1()
      this.imageSwitcher2()
      this.imageSwitcher3()
      this.imageSwitcher4()
      this.imageSwitcher5()
    },
    imageSwitcher1() {
      switch (this.value1) {
        case 0:
          this.image1 =
            'https://cdn4.iconfinder.com/data/icons/unigrid-flat-devices-vol-2/90/017_248_casino_games_slot_machine_gambling-512.png'
          break
        case 1:
          this.image1 =
            'https://cdn4.iconfinder.com/data/icons/slot-machine-icons/200/casino_7-512.png'
          break
        case 2:
          this.image1 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Orange-512.png'
          break
        case 3:
          this.image1 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Watermelon-512.png'
          break
        case 4:
          this.image1 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Clover-512.png'
          break
        case 5:
          this.image1 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Bar-512.png'
          break

        default:
          this.image1 =
            'https://cdn4.iconfinder.com/data/icons/unigrid-flat-devices-vol-2/90/017_248_casino_games_slot_machine_gambling-512.png'
          break
      }
    },
    imageSwitcher2() {
      switch (this.value2) {
        case 0:
          this.image2 =
            'https://cdn4.iconfinder.com/data/icons/unigrid-flat-devices-vol-2/90/017_248_casino_games_slot_machine_gambling-512.png'
          break
        case 1:
          this.image2 =
            'https://cdn4.iconfinder.com/data/icons/slot-machine-icons/200/casino_7-512.png'
          break
        case 2:
          this.image2 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Orange-512.png'
          break
        case 3:
          this.image2 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Watermelon-512.png'
          break
        case 4:
          this.image2 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Clover-512.png'
          break
        case 5:
          this.image2 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Bar-512.png'
          break

        default:
          this.image2 =
            'https://cdn4.iconfinder.com/data/icons/unigrid-flat-devices-vol-2/90/017_248_casino_games_slot_machine_gambling-512.png'
          break
      }
    },
    imageSwitcher3() {
      switch (this.value3) {
        case 0:
          this.image3 =
            'https://cdn4.iconfinder.com/data/icons/unigrid-flat-devices-vol-2/90/017_248_casino_games_slot_machine_gambling-512.png'
          break
        case 1:
          this.image3 =
            'https://cdn4.iconfinder.com/data/icons/slot-machine-icons/200/casino_7-512.png'
          break
        case 2:
          this.image3 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Orange-512.png'
          break
        case 3:
          this.image3 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Watermelon-512.png'
          break
        case 4:
          this.image3 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Clover-512.png'
          break
        case 5:
          this.image3 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Bar-512.png'
          break

        default:
          this.image3 =
            'https://cdn4.iconfinder.com/data/icons/unigrid-flat-devices-vol-2/90/017_248_casino_games_slot_machine_gambling-512.png'
          break
      }
    },
    imageSwitcher4() {
      switch (this.value4) {
        case 0:
          this.image4 =
            'https://cdn4.iconfinder.com/data/icons/unigrid-flat-devices-vol-2/90/017_248_casino_games_slot_machine_gambling-512.png'
          break
        case 1:
          this.image4 =
            'https://cdn4.iconfinder.com/data/icons/slot-machine-icons/200/casino_7-512.png'
          break
        case 2:
          this.image4 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Orange-512.png'
          break
        case 3:
          this.image4 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Watermelon-512.png'
          break
        case 4:
          this.image4 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Clover-512.png'
          break
        case 5:
          this.image4 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Bar-512.png'
          break

        default:
          this.image4 =
            'https://cdn4.iconfinder.com/data/icons/unigrid-flat-devices-vol-2/90/017_248_casino_games_slot_machine_gambling-512.png'
          break
      }
    },
    imageSwitcher5() {
      switch (this.value5) {
        case 0:
          this.image5 =
            'https://cdn4.iconfinder.com/data/icons/unigrid-flat-devices-vol-2/90/017_248_casino_games_slot_machine_gambling-512.png'
          break
        case 1:
          this.image5 =
            'https://cdn4.iconfinder.com/data/icons/slot-machine-icons/200/casino_7-512.png'
          break
        case 2:
          this.image5 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Orange-512.png'
          break
        case 3:
          this.image5 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Watermelon-512.png'
          break
        case 4:
          this.image5 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Clover-512.png'
          break
        case 5:
          this.image5 =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Bar-512.png'
          break

        default:
          this.image5 =
            'https://cdn4.iconfinder.com/data/icons/unigrid-flat-devices-vol-2/90/017_248_casino_games_slot_machine_gambling-512.png'
          break
      }
    }
  }
}
</script>
