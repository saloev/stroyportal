<template>
  <header class="main-header">
    <TopHeader />
  </header>
</template>
<script>
  import TopHeader from "@/components/layout/TopHeader.vue";
  export default {
    name: "MainHeader",

    components: {
      TopHeader,
    },
  };
</script>
