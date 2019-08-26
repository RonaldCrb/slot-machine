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
    state.value1 = payload.value1
    state.value2 = payload.value2
    state.value3 = payload.value3
    state.value4 = payload.value4
    state.value5 = payload.value5
  }
}

export const actions = {
  spin({ commit }) {
    const options = { min: 1, max: 6, integer: true }
    const value1 = rn(options)
    const value2 = rn(options)
    const value3 = rn(options)
    const value4 = rn(options)
    const value5 = rn(options)
    const payload = {
      value1,
      value2,
      value3,
      value4,
      value5
    }
    commit('SET_SLOTS', payload)
  }
}
