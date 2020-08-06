<template>
  <v-card class="v-card--spacing">
    <v-card-title class="headline">
      {{ title }}
    </v-card-title>
    <v-card-subtitle><slot /></v-card-subtitle>
    <v-slider
      :tick-labels="options"
      :value="1"
      min="1"
      max="7"
      @change="change"
    >
      <template v-slot:append>
        {{ appendText }}
      </template>
      <template v-slot:prepend>
        {{ prependText }}
      </template>
    </v-slider>
  </v-card>
</template>
<script>
export default {
  name: 'SliderOption',
  props: {
    title: {
      type: String,
      default: ''
    },
    appendText: {
      type: String,
      default: 'Fim'
    },
    prependText: {
      type: String,
      default: 'Inicio'
    }
  },
  data: () => ({
    options: [
      1, 2, 3, 4, 5, 6, 7
    ],
  }),
  methods: {
    change(value) {
      console.log(value);
      this.$emit('change', value);
    }
  }
};
</script>

<style scoped>
  .v-card--spacing{
    padding: 20px;
  }
</style>
