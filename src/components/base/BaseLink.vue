<template>
  <a :class="classes" :href="href">
    <slot></slot>
  </a>
</template>
<script>
  export default {
    name: "BaseLink",
    props: {
      small: {
        type: Boolean,
        default: false,
      },
      info: {
        type: Boolean,
        default: false,
      },
      href: {
        type: String,
        required: true,
      },
    },

    computed: {
      classes() {
        return {
          "base-link": true,
          "base-link--info": this.info,
          ...this.sizeableClasses,
        };
      },
      sizeableClasses() {
        return {
          "base-link--small": this.small,
        };
      },
    },
  };
</script>
<style lang="scss">
  .base-link {
    font-size: #{map-get($link-font-size, "default")};
    line-height: #{map-get($link-line-height, "default")};

    text-decoration: none;
    color: $black;

    opacity: 1;

    &:hover,
    &:focus {
      color: currentColor;
      opacity: 0.5;
      @include transition();
    }

    &--small {
      font-size: #{map-get($link-font-size, "small")};
      line-height: #{map-get($link-line-height, "small")};
    }

    &--info {
      color: $info;
    }
  }
</style>
