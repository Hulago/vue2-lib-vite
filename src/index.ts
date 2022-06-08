import { PluginFunction, PluginObject, VueConstructor } from "vue";

import MyButton from "./components/MyButton.vue";

export { MyButton };

const install: PluginFunction<any> = (
  Vue: VueConstructor
  // eslint-disable-next-line no-unused-vars
): void => {
  Vue.component("MyButton", MyButton);
};

export const plugin: PluginObject<any> = {
  install,
  version: "1.0.0"
};

/**
 * @public
 */

let GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}
