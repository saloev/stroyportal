import Vue from 'vue';
import GlobalComponents from "./global-components";
import VueSvgicon from "./vue-svgicon";

const allPlugins = [GlobalComponents, VueSvgicon];
export default () => {
  allPlugins.forEach((plugin) => plugin(Vue));
};
