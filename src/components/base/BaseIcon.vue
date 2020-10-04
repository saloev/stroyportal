<template>
  <svgicon
    :name="icon"
    :original="original"
    :fill="fill"
    :color="color"
    :class="classes"
  />
</template>
<script>
  import "@/icons/burger";
  import "@/icons/list";
  import "@/icons/location";
  import "@/icons/chevron-bottom";
  import "@/icons/list-notification";
  import "@/icons/search";
  import "@/icons/spin";

  export default {
    name: "BaseIcon",

    props: {
      icon: {
        type: String,
        default: "burger",
      },
      fill: {
        type: Boolean,
        default: false,
      },
      color: {
        type: String,
        default: "currentColor",
      },
      original: {
        type: Boolean,
        default: true,
      },
      spin: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      classes() {
        return {
          spinner: this.spin,
        };
      },
    },
  };
</script>

<style lang="scss">
  .svg-icon {
    &.spinner {
       animation: icon-spin 2s infinite linear;
    }
  }

  @keyframes icon-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
</style>
