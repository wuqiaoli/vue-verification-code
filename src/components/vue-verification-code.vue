<template>
  <div class="vue2-verification-code">
    <template v-for="(i, index) in codeList">
      <div class="input-wrap" :key="index" :style="computedStyle">
        <input
          :ref="'inputRef' + index"
          class="input-wrap-size"
          v-model="codeList[index]"
          type="tel"
          name="number"
          :min="0"
          :maxlength="1"
          minlength="1"
          @input="input($event, index)"
          @keydown="handleKeyPress($event, index)"
          autocomplete="off"
        />
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "vue-verification-code",
  props: {
    size: {
      type: Number,
      default: 48,
    },
    color: {
      type: String,
      default: "#009848",
    },
  },
  data() {
    return {
      text: 1,
      codeList: ["", "", "", "", "", ""],
    };
  },
  computed: {
    computedStyle() {
      return {
        "--size": `${this.size}px`,
        "--color": this.color,
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.inputRef0[0].focus();
    });
  },
  methods: {
    input(e, index) {
      const val = e.target.value;
      if (val !== null && val !== undefined) {
        const nextRef = this.$refs[`inputRef${index + 1}`];
        if (nextRef) {
          nextRef[0].focus();
        }
      }
      this.$emit("input", this.codeList);
    },
    handleKeyPress(e, index) {
      const { key } = e;
      if (key === "Backspace") {
        if (this.codeList[index]) {
          this.codeList[index] = "";
        } else {
          const beforeIndex = index - 1;
          const borderRef = this.$refs[`inputRef${beforeIndex}`];
          if (borderRef) {
            this.codeList[beforeIndex] = "";
            borderRef[0].focus();
            this.$forceUpdate();
          }
        }
        this.$emit("input", this.codeList);
      }
    },
  },
};
</script>
<style scoped>
.vue2-verification-code {
  --size: 48px;
  --color: #009848;
  --border-color: #dddddd;
  --radius: 8px;
  --text-color: #232323;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  color: var(--text-color);
  .input-wrap {
    position: relative;
    width: var(--size);
    height: var(--size);
    transform: all 0.3s ease;
  }
  .input-wrap-size {
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
    text-align: center;
    line-height: var(--size);
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    transition: border-color 0.5s ease;
    box-sizing: border-box;
  }
  .input-wrap-size:focus {
    outline: none;
    border-color: var(--color);
  }
}
</style>
