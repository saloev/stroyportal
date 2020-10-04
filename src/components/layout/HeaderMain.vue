<template>
  <div class="header-main">
    <BaseContainer class="header-main__container">
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
    border: 1px solid $accent;

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__input  {
      width: 45%;
    }
  }
</style>
