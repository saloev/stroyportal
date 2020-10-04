module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        prependData: `@import "~@/scss/_include.scss";`,
      },
    },
  },
};
