<template>
  <div>
    <v-card color="purple">
      <v-card-title>This Slot Machine works with Vuex data</v-card-title>
      <v-container fluid>
        <v-layout justify-center>
          <v-flex xs2>
            <h1 class="text-xs-center">{{ value1 }}</h1>
          </v-flex>
          <v-flex xs2>
            <h1 class="text-xs-center">{{ value2 }}</h1>
          </v-flex>
          <v-flex xs2>
            <h1 class="text-xs-center">{{ value3 }}</h1>
          </v-flex>
          <v-flex xs2>
            <h1 class="text-xs-center">{{ value4 }}</h1>
          </v-flex>
          <v-flex xs2>
            <h1 class="text-xs-center">{{ value5 }}</h1>
          </v-flex>
          <v-flex xs2>
            <v-btn dark color="yellow" @click="spin">spin</v-btn>
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
