import rn from 'random-number'
import Swal from 'sweetalert2'
export const state = () => ({
  image1: '',
  image2: '',
  image3: '',
  image4: '',
  image5: ''
})

export const mutations = {
  SET_SPINNERS(state) {
    state.image1 =
      'https://icon-library.net/images/please-wait-icon/please-wait-icon-5.jpg'
    state.image2 =
      'https://icon-library.net/images/please-wait-icon/please-wait-icon-5.jpg'
    state.image3 =
      'https://icon-library.net/images/please-wait-icon/please-wait-icon-5.jpg'
    state.image4 =
      'https://icon-library.net/images/please-wait-icon/please-wait-icon-5.jpg'
    state.image5 =
      'https://icon-library.net/images/please-wait-icon/please-wait-icon-5.jpg'
  },
  SET_SLOT_IMAGE(state, images) {
    state.image1 = images[0]
    state.image2 = images[1]
    state.image3 = images[2]
    state.image4 = images[3]
    state.image5 = images[4]
  }
}

export const actions = {
  spin({ commit, dispatch }) {
    const options = { min: 1, max: 5, integer: true }

    let numbers = []

    for (let i = 0; i <= 5; i++) {
      const value = rn(options)
      numbers = [...numbers, value]
    }
    commit('SET_SPINNERS')
    setTimeout(() => {
      dispatch('imageSwitcher', numbers)
    }, 4550)
    if (
      numbers[0] === numbers[1] &&
      numbers[1] === numbers[2] &&
      numbers[2] === numbers[3] &&
      numbers[3] === numbers[4]
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
  },

  imageSwitcher({ commit }, numbers) {
    let images = []

    for (let i = 0; i <= numbers.length; i++) {
      let image
      switch (numbers[i]) {
        case 0:
          image =
            'https://cdn4.iconfinder.com/data/icons/unigrid-flat-devices-vol-2/90/017_248_casino_games_slot_machine_gambling-512.png'
          break
        case 1:
          image =
            'https://cdn4.iconfinder.com/data/icons/slot-machine-icons/200/casino_7-512.png'
          break
        case 2:
          image =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Orange-512.png'
          break
        case 3:
          image =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Watermelon-512.png'
          break
        case 4:
          image =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Clover-512.png'
          break
        case 5:
          image =
            'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Bar-512.png'
          break
      }
      images = [...images, image]
    }
    commit(`SET_SLOT_IMAGE`, images)
  }
}
