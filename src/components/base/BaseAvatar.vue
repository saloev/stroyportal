<template>
  <button
    :class="classes"
    :style="`background-color:${bgColor}; color: ${textColor}`"
  >
    <img :src="imgSrc" :alt="this.name" v-if="imgSrc" />
    <p v-else>
      <span class="visually-hidden">{{ name }}</span>
      <span>{{ nameFirstLetter }}</span>
    </p>
  </button>
</template>
<script>
  export default {
    name: "BaseAvatar",

    props: {
      name: {
        type: String,
        required: true,
      },
      "bg-color": {
        type: String,
        default: "#9B51E0",
      },
      "text-color": {
        type: String,
        default: "#fff",
      },
      "img-src": {
        type: String,
      },
      small: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      nameFirstLetter() {
        return this.name[0];
      },
      classes() {
        return {
          "base-avatar": true,
          ...this.sizeableClasses,
        };
      },
      sizeableClasses() {
        return {
          "base-avatar--small": this.small,
        };
      },
    },
    mounted() {
      console.log(this.bgColor);
    }
  };
</script>
<style lang="scss">
  .base-avatar {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;

    background: transparent;
    border: none;
    outline: none;

    transform: scale(1);
    transition: .3s linear transform;

    &:hover,
    &:focus {
      cursor: pointer;
      transform: scale(1.1);
    }

    &--small {
      width: 30px;
      height: 30px;

      font-size: 10px;
      line-height: 15px;
    }
  }
</style>
