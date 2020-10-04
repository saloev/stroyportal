<template>
  <div class="base-container">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "BaseContainer",
  };
</script>
<style lang="scss">
.base-container {
  max-width: $container-max-width;
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
}
  
</style>
