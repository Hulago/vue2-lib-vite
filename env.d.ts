declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "@vue/runtime-dom" {
  type ReservedProps = {
    key?: string | number | symbol;
  };
}
