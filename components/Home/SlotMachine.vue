<template>
  <div>
    <v-card color="purple">
      <v-container fluid>
        <v-layout wrap justify-center>
          <v-flex xs12>
            <v-card-title
              ><h2 class="text-center black--text">
                This Slot Machine works with local state
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
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      value5: 0
    }
  },
  methods: {
    spin() {
      const min = 1
      const max = 6
      this.value1 = Math.floor(Math.random() * (+max - +min)) + +min
      this.value2 = Math.floor(Math.random() * (+max - +min)) + +min
      this.value3 = Math.floor(Math.random() * (+max - +min)) + +min
      this.value4 = Math.floor(Math.random() * (+max - +min)) + +min
      this.value5 = Math.floor(Math.random() * (+max - +min)) + +min
    }
  }
}
</script>
