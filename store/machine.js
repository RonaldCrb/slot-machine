import rn from 'random-number'
export const state = () => ({
  value1: 0,
  value2: 0,
  value3: 0,
  value4: 0,
  value5: 0
})

export const mutations = {
  SET_SLOTS(state, payload) {
    state.value1 = payload[0]
    state.value2 = payload[1]
    state.value3 = payload[2]
    state.value4 = payload[3]
    state.value5 = payload[4]
  }
}

export const actions = {
  spin({ commit }) {
    const options = { min: 1, max: 5, integer: true }
    let numbers = []
    for (let i = 0; i <= 5; i++) {
      const value = rn(options)
      numbers = [...numbers, value]
    }
    commit('SET_SLOTS', numbers)
  }
}
