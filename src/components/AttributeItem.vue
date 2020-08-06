<template>
  <div class="attribute-item">
    <span class="attribute-item__description">{{ description }}</span>
    <span class="attribute-item__value"> {{ value }} </span>
    <span class="attribute-item__title"> {{ title }}</span>
  </div>
</template>
<script>
export default {
  name: 'AttributeItem',
  props: {
    description: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>

  .attribute-item{
    display: flex;
    flex-flow: column;
    width: 100px;
    align-items: center;
    justify-content: center;
  }
  .attribute-item__description {
    font-size: 12px;
    text-align: center;
  }

  .attribute-item__title {
    font-size: 22px;
    font-weight: bold;
  }

  .attribute-item__value {
    width: 50px;
    height: 50px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
    color: #333;
    border-radius: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
