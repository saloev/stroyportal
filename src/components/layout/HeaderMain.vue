<template>
  <div class="header-main">
    <BaseContainer class="header-main__container">
      <BaseLogo />
    </BaseContainer>
  </div>
</template>
<script>
  export default {
    name: "HeaderMain",
  };
</script>
<style lang="scss">
  .header-main {
    padding: 15px 0;

    background-color: $white;
    border: 1px solid $accent;

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
