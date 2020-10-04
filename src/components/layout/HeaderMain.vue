<template>
  <div class="header-main">
    <BaseContainer class="header-main__container header-main__container-laptop">
      <BaseLogo />

      <BaseButton is-warning>
        <BaseIcon icon="list" />
        Каталог
      </BaseButton>

      <InputSeach
        :artificial-delay="250"
        class="header-main__input"
        placeholder="Хочу найти..."
        :autocompleteList="allCategories"
      />

      <BaseButton accent>
        <BaseIcon icon="list-notification" />
        Список
      </BaseButton>

      <BaseAvatar name="Andrew"></BaseAvatar>
    </BaseContainer>

    <BaseContainer class="header-main__container header-main__container-mobile">
      <div class="header-main__container-logo-avatar">
        <BaseLogo />

        <BaseAvatar name="Andrew"></BaseAvatar>
      </div>

      <BaseButton is-warning icon>
        <BaseIcon icon="list" width="20px" height="20px" />
      </BaseButton>

      <InputSeach
        :artificial-delay="250"
        class="header-main__input"
        placeholder="Хочу найти..."
        :autocompleteList="allCategories"
      />

      <BaseButton accent icon>
        <BaseIcon icon="list-notification" width="20px" height="20px" />
      </BaseButton>
    </BaseContainer>
  </div>
</template>
<script>
  import InputSeach from "@/components/InputSearch.vue";
  export default {
    name: "HeaderMain",

    components: {
      InputSeach,
    },

    computed: {
      allCategories() {
        return [
          {
            id: 1,
            name: "Строительные материалы",
            link: "#",
            subCategories: [
              {
                id: 11,
                name: "Бетон, ЖБИ",
                link: "#",
              },
              {
                id: 12,
                name: "Геоматериалы",
                link: "#",
              },
            ],
          },
          {
            id: 2,
            name: "Инженерные системы",
            link: "#",
            subCategories: [
              {
                id: 21,
                name: "Безопасность",
                link: "#",
              },
              {
                id: 22,
                name: "Инженерная сантехника",
                link: "#",
              },
            ],
          },
          {
            id: 3,
            name: "Все для дома и дачи",
            link: "#",
            subCategories: [
              {
                id: 31,
                name: "Все для дачи и сада",
                link: "#",
              },
              {
                id: 32,
                name: "Кухонные принадлежности",
                link: "#",
              },
            ],
          },
        ];
      },
    },
  };
</script>
<style lang="scss">
  .header-main {
    padding: 15px 0;

    background-color: $white;
    border-bottom: 1px solid $accent;

    &__container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;

      &-laptop {
        display: none;
        @include media("lg-and-up") {
          display: flex;
        }
      }

      &-mobile {
        display: flex;
        @include media("lg-and-up") {
          display: none;
        }

        @include media("xs-only") {
          & > button {
            display: none;
          }
        }
      }

      &-logo-avatar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 20px;
        border-bottom: 1px solid $accent;
      }
    }

    &__input {
      width: 70%;
      margin: 0 20px;
      @include media("lg-and-up") {
        width: 45%;
      }

      @include media("xs-only") {
        width: 100%;
        margin: 0;
      }
    }
  }
</style>
