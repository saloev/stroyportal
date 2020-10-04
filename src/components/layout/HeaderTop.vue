<template>
  <div class="top-header">
    <BaseContainer class="top-header__container">
      <BaseButton info small text>
        <BaseIcon icon="location" />
        Волгоградская область
      </BaseButton>
      <ul class="top-header__list reset--list-style">
        <li class="top-header__list-item"><BaseLink href="#" info>Тендеры</BaseLink></li>
        <li class="top-header__list-item"><BaseLink href="#" info>База подрядчиков</BaseLink></li>
        <li class="top-header__list-item">
          <BaseButton text small icon-right info>
            Другие сервисы
            <BaseIcon icon="chevron-bottom" />
          </BaseButton>
        </li>
      </ul>
    </BaseContainer>
  </div>
</template>
<style lang="scss">
  .top-header {
    padding: 3px 0;

    background-color: $secondary;
    border: 1px solid $accent;

    &__container,
    &__list {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__container {
      
    }

    &__list {
      width: 330px;

      & > li:last-child {
        margin-left: -20px;;
      }

      @include media('sm-and-down') {
        display: none;
      }
    }
  }
</style>
