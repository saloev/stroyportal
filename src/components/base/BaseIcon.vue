<template>
  <svgicon :name="icon" original :fill="fill" color="currentColor" />
</template>
<script>
  import "@/icons/burger";
  import "@/icons/list";
  import "@/icons/location";
  import "@/icons/chevron-bottom";
  import "@/icons/list-notification";
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
      }
    },
  };
</script>

<style lang="scss">
  .svg-icon {
  }
</style>
