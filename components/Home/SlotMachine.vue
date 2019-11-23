<template>
  <div>
    <v-card color="purple">
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="12" align="center" justify="center">
            <h2 class="text-center black--text">
              LOCAL COMPONENT STATE
            </h2>
          </v-col>
        </v-row>
        <v-row dense justify="center" align="center">
          <v-col cols="2" class="px-1">
            <v-card color="yellow">
              <v-img :src="image1" :alt="toString(value1)"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2" class="px-1">
            <v-card color="yellow">
              <v-img :src="image2" :alt="toString(value2)"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2" class="px-1">
            <v-card color="yellow">
              <v-img :src="image3" :alt="toString(value3)"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2" class="px-1">
            <v-card color="yellow">
              <v-img :src="image4" :alt="toString(value4)"></v-img>
            </v-card>
          </v-col>
          <v-col cols="2" class="px-1">
            <v-card color="yellow">
              <v-img :src="image5" :alt="toString(value5)"></v-img>
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
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      value1: 0,
      image1: '',
      value2: 0,
      image2: '',
      value3: 0,
      image3: '',
      value4: 0,
      image4: '',
      value5: 0,
      image5: ''
    }
  },
  computed: {},
  methods: {
    spin() {
      Howler.volume(0)
      const sound = new Howl({
        src: ['https://webiserver.herokuapp.com/public/sound.mp3']
      })
      sound.play()
      this.setSpinners()
      setTimeout(() => {
        const min = 1
        const max = 6
        this.value1 = Math.floor(Math.random() * (+max - +min)) + +min
        this.value2 = Math.floor(Math.random() * (+max - +min)) + +min
        this.value3 = Math.floor(Math.random() * (+max - +min)) + +min
        this.value4 = Math.floor(Math.random() * (+max - +min)) + +min
        this.value5 = Math.floor(Math.random() * (+max - +min)) + +min
        if (
          this.value1 === this.value2 &&
          this.value2 === this.value3 &&
          this.value3 === this.value4 &&
          this.value4 === this.value5
        ) {
          Swal.fire({
            titleText: 'YOU WON!',
            text: 'Luck smiles on you, time to get payed!',
            grow: true,
            confirmButtonColor: '#FF5722',
            imageUrl:
              'https://media.tenor.com/images/4ff6d17161620037621f48bb2aac9aef/tenor.gif',
            background: '#fff',
            position: 'center'
          })
        }
        this.imageSwitcher1()
        this.imageSwitcher2()
        this.imageSwitcher3()
        this.imageSwitcher4()
        this.imageSwitcher5()
      }, 4550)
    },
    setSpinners() {
      this.image1 =
        'https://icon-library.net/images/please-wait-icon/please-wait-icon-5.jpg'
      this.image2 =
        'https://icon-library.net/images/please-wait-icon/please-wait-icon-5.jpg'
      this.image3 =
        'https://icon-library.net/images/please-wait-icon/please-wait-icon-5.jpg'
      this.image4 =
        'https://icon-library.net/images/please-wait-icon/please-wait-icon-5.jpg'
      this.image5 =
        'https://icon-library.net/images/please-wait-icon/please-wait-icon-5.jpg'
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
