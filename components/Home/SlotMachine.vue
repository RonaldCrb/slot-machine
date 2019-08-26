<template>
  <div>
    <v-card color="purple">
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
      const max = 5
      this.value1 = Math.floor(Math.random() * (+max - +min)) + +min
      this.value2 = Math.floor(Math.random() * (+max - +min)) + +min
      this.value3 = Math.floor(Math.random() * (+max - +min)) + +min
      this.value4 = Math.floor(Math.random() * (+max - +min)) + +min
      this.value5 = Math.floor(Math.random() * (+max - +min)) + +min
    }
  }
}
</script>
