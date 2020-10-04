<template>
  <button :class="classes">
    <span class="base-button__content">
      <slot></slot>
    </span>
  </button>
</template>
<script>
  export default {
    name: "BaseButton",
    props: {
      text: {
        type: Boolean,
        default: false,
      },
      small: {
        type: Boolean,
        default: false,
      },
      accent: {
        type: Boolean,
        default: false,
      },
      info: {
        type: Boolean,
        default: false,
      },
      "is-warning": {
        type: Boolean,
        default: false,
      },
      "icon-left": {
        type: Boolean,
        default: true,
      },
      "icon-right": {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      classes() {
        return {
          "base-button": true,
          "base-button--text": this.text,
          "base-button--is-warning": this.isWarning,
          "base-button--accent": this.accent,
          "base-button--info": this.info,
          "base-button--icon-left": this.iconLeft,
          "base-button--icon-right": this.iconRight,
          ...this.sizeableClasses,
        };
      },
      sizeableClasses() {
        return {
          "base-button--small": this.small,
        };
      },
    },
  };
</script>
<style lang="scss">
  .base-button {
    position: relative;

    padding: 10px 16px;

    font-size: #{map-get($btn-font-size, "default")};
    line-height: #{map-get($btn-line-height, "default")};

    border-radius: 4px;
    background: transparent;
    border: none;
    outline: none;

    &::before {
      content: "";

      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background: currentColor;
      border-radius: 4px;

      opacity: 0;
      transform: scale(0);

      transition: 0.2s linear;
    }

    &:hover,
    &:focus {
      cursor: pointer;

      &::before {
        transform: scale(1);
        opacity: 0.3;
      }
    }

    &__content {
      display: flex;
      align-items: center;

      & > svg {
        width: #{map-get($btn-font-size, "default")};
      }
    }

    &--small {
      padding: 2px 5px;

      font-size: #{map-get($btn-font-size, "small")};
      line-height: #{map-get($btn-line-height, "small")};

      .base-button__content {
        & > svg {
          width: #{map-get($btn-font-size, "small")};
        }
      }
    }

    &--is-warning {
      background-color: $warning;
    }
    &--accent {
      background-color: $accent;
    }
    &--info {
      color: $info;
    }

    &--icon-left {
      .base-button__content {
        & > svg {
          margin-right: 8px;
        }
      }
    }

    &--icon-right {
      .base-button__content {
        & > svg {
          margin-right: 0;
          margin-left: 8px;
        }
      }
    }
  }
</style>
