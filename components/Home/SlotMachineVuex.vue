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
              <h1 class="text-center black--text">{{ value1 }}</h1>
            </v-card>
          </v-flex>
          <v-flex xs2 pa-2 ma-2>
            <v-card color="yellow">
              <h1 class="text-center black--text">{{ value2 }}</h1>
            </v-card>
          </v-flex>
          <v-flex xs2 pa-2 ma-2>
            <v-card color="yellow">
              <h1 class="text-center black--text">{{ value3 }}</h1>
            </v-card>
          </v-flex>
          <v-flex xs2 pa-2 ma-2>
            <v-card color="yellow">
              <h1 class="text-center black--text">{{ value4 }}</h1>
            </v-card>
          </v-flex>
          <v-flex xs2 pa-2 ma-2>
            <v-card color="yellow">
              <h1 class="text-center black--text">{{ value5 }}</h1>
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
export default {
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
      this.$store.dispatch('machine/spin')
    }
  }
}
</script>
