<template>
  <div class="input-search__wrapper">
    <input
      :class="classes"
      type="search"
      @input="onInput"
      v-model="input"
      :placeholder="placeholder"
    />

    <BaseIcon
      :icon="isSearch ? 'spin' : 'search'"
      width="20px"
      height="20px"
      color="#708598"
      class="input-search__icon"
      :spin="isSearch"
    />

    <transition class="fade">
      <div
        v-show="autoCompleteResult.length"
        class="input-search__autocomplete"
        :class="{ 'search__autocomplete--fixed': fixed }"
        :style="setInlineStyle"
      >
        <ul class="input-search__autocomplete-list reset--list-style">
          <li
            v-for="{ link, name, id, subCategories } in autoCompleteResult"
            :key="id"
          >
            <BaseLink :href="link">{{ name }}</BaseLink>
            <ul
              class="input-search__autocomplete-list"
              v-if="subCategories && subCategories.length"
            >
              <li v-for="{ link, name, id } in subCategories" :key="id">
                <BaseLink :href="link">{{ name }}</BaseLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
  let INPUT_TIMEOUT = null;
  let ARTIFICIAL_TIMEOUT = null;
  const INPUT_DELAY = 200;

  export default {
    name: "InputSearch",

    data: () => ({
      input: null,
      isSearch: false,
      autoCompleteResult: [],
    }),

    props: {
      autocompleteList: {
        type: Array,
        default: () => [],
      },
      placeholder: {
        type: String,
        default: "Поиск",
      },
      fixed: {
        type: Boolean,
        default: false,
      },
      top: {
        type: String,
      },
      left: {
        type: String,
      },
      "z-index": {
        type: Number,
      },
      block: {
        type: Boolean,
        default: true,
      },
      "artificial-delay": {
        type: Number,
        default: 0,
      },
    },

    computed: {
      classes() {
        return {
          "input-search": true,
          "input-search--block": this.block,
        };
      },
      showAutocomplete() {
        return this.autocompleteList.length >= 1;
      },
      setInlineStyle() {
        const inlineProps = [
          [this.top, "top"],
          [this.left, "left"],
          [this.zIndex, "z-index"],
        ];

        return inlineProps.reduce((acc, [prop, cssProp]) => {
          if (prop) {
            acc += `${cssProp}:${prop};`;
          }
          return acc;
        }, "");
      },
    },

    methods: {
      onInput() {
        if (!this.showAutocomplete) return;
        if (INPUT_TIMEOUT) clearTimeout(INPUT_TIMEOUT);
        INPUT_TIMEOUT = setTimeout(this.search, INPUT_DELAY);
      },
      search() {
        this.isSearch = true;

        const compare = (val) =>
          val.toLowerCase().includes(this.input.toLowerCase());

        const res = this.autocompleteList.filter((item) => {
          if (!this.input) return false;

          if (compare(item.name)) return true;

          const filterSubCats = item.subCategories.filter((subCat) =>
            compare(subCat.name)
          );

          if (filterSubCats.length) {
            item.subCategories = filterSubCats;
            return true;
          }

          return false;
        });

        if (ARTIFICIAL_TIMEOUT) clearTimeout(ARTIFICIAL_TIMEOUT);

        ARTIFICIAL_TIMEOUT = setTimeout(() => {
          this.autoCompleteResult = res;
          this.isSearch = false;
        }, this.artificialDelay);
      },
    },
  };
</script>
<style lang="scss">
  .input-search {
    padding: 7px 15px;
    outline: none;

    border: 1px solid $accent;
    border-radius: 4px;

    font-size: 14px;
    line-height: 24px;

    transition: 0.3s ease-in-out border-color;

    &__wrapper {
      position: relative;
    }

    &:hover {
      border-color: $primary;
    }

    &:focus {
      border-color: $info;
    }

    &__icon {
      position: absolute;
      top: 9px;
      right: 10px;
    }

    &--block {
      width: 100%;
    }

    &__autocomplete {
      position: absolute;
      z-index: 500;
      top: 40px;

      padding: 10px;
      width: 100%;
      border: 1px solid $accent;

      background: $white;
      border-radius: 4px;

      &--fixed {
        position: fixed;
      }
    }
  }
</style>
