/**
 * Extends interfaces in Vue.js
 */

import Vue, { ComponentOptions } from "vue";

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    socket?: any;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $socket: any;
  }
}
