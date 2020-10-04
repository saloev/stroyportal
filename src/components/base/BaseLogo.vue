<template>
  <a href="/" class="base-logo">
    <img :src="require(`@/assets/logo.svg`)" alt="StroyPortal main logo" />
  </a>
</template>
<script>
  export default {
    name: "BaseLogo",
  };
</script>

<style lang="scss">
  .base-logo {
    opacity: 1;
    transform: scale(1);

    @include transition(all);

    &:hover,
    &:focus {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }
</style>
