<template>
  <div class="header-main">
    <BaseContainer class="header-main__container">
      <BaseLogo />
      <BaseButton is-warning>
        <BaseIcon icon="list" />
        Каталог
      </BaseButton>
      <BaseButton accent>
        <BaseIcon icon="list-notification" />
        Список
      </BaseButton>
      <BaseAvatar name="Andrew"></BaseAvatar>
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
