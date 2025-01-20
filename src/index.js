import VueVerificationCode from "./components/vue-verification-code.vue";
export default VueVerificationCode;
// 允许全局注册组件
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("VueVerificationCode", VueVerificationCode);
}
