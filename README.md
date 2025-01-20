# vue2-code-components

## 描述(Description)

```
基于vue2的6位数验证码组件
```

## 安装依赖(Install)

```
npm install  vue2-verification-code
```

## 全局引入(Global Import)

```
<verification-code @input="listeVal" :size="48" color="#ff0000"
></verification-code>

//main.js
import verificationCode from "vue2-verification-code"";
Vue.component("verificationCode", verificationCode);
```

## 按需引入(Plugin Component)

```
<verification-code  :size="48" color="#ff0000"
></verification-code>

import verificationCode from "vue2-verification-code"";
export default{
  components:{
    verificationCode
  }
}
```

## 参数(Props)

```
props: {
  size: {
    type: Number,
    default: 48,
  },
  color: {
    type: String,
    default: "#009848",
  },
}
```

## 事件(Events)

| 序号 | 事件  | 描述                  |
| ---- | ----- | --------------------- |
| 1    | input | 在 Input 值改变时触发 |

```
<vue-verification-code @input="listeVal"><vue-verification-code>

methods: {
  listeVal(val) {
    console.log("listen", val);
  }
}
```
