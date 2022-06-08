
<template>
  <div :style="fontStyle">
    <div>
      <slot></slot>
    </div>
    <div class="rate" @mouseout="mouseOut">
      <span v-for="num in 5" :key="num" @mouseover="mouseOver(num)">☆</span>
      <span class='hollow' :style="fontwidth">
        <span v-for='num in 5' :key="num" @mouseover="mouseOver(num)" @click="onRate(num)">★</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, computed, defineEmits } from 'vue';

let props = defineProps({
  modelValue: Number,
  theme: { type: String, default: 'orange' }
});

let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value));
const themeObj = {
  'black': '#00',
  'white': '#fff',
  'red': '#f5222d',
  'orange': '#fa541c',
  'yellow': '#fadb14',
  'green': '#73d13d',
  'blue': '#40a9ff',
};
const fontStyle = computed(() => {
  return `color:${themeObj[props.theme]}`;
});


let width = ref(props.modelValue);
function mouseOver(i) {
  width.value = i
}
function mouseOut() {
  width.value = props.modelValue
}
const fontwidth = computed(() => `width:${width.value}em;`)

let emits = defineEmits(['update:modelValue'])
function onRate(num) {
  emits('update:modelValue', num)
}

</script>
<style scoped>
.rate {
  position: relative;
  display: inline-block;
}

.rate>span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>