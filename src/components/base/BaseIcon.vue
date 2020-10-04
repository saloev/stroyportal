<template>
  <svgicon :name="icon" original :fill="false" color="currentColor" />
</template>
<script>
  import "@/icons/burger";
  import "@/icons/list";
  import "@/icons/location";
  import "@/icons/chevron-bottom";
  export default {
    name: "BaseIcon",

    props: {
      icon: {
        type: String,
        default: "burger",
      },
    },
  };
</script>

<style lang="scss">
  .svg-icon {
  }
</style>
