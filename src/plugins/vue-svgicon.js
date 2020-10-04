import * as svgicon from 'vue-svgicon';

export default (app) => {
  app.use(svgicon, {
    tagName: 'svgicon'
  })
};