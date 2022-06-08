<template>
  <div>
    <div class="box" :style="{ width: `${width}px` }"></div>
    <button @click="changeWidth">改变宽度</button>
    <div>
      <transition name="fade">
        <h1 v-if="showTitle">你好，vue</h1>
      </transition>
      <button @click="triggerTitleShowStatus">改变 h1 的显示影藏状态</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
let width = ref(100)
function changeWidth() {
  width.value += 100;
}

let showTitle = ref(false)
function triggerTitleShowStatus() {
  showTitle.value = !showTitle.value;
}
</script>
<style>
.box {
  background: red;
  height: 100px;
  transition: width 1s linear;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>