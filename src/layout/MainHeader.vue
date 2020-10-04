<template>
  <header class="main-header">
    <HeaderTop />
    <HeaderMain />
  </header>
</template>
<script>
  import HeaderTop from "@/components/layout/HeaderTop.vue";
  import HeaderMain from "@/components/layout/HeaderMain.vue"
  export default {
    name: "MainHeader",

    components: {
      HeaderTop,
      HeaderMain,
    },
  };
</script>
