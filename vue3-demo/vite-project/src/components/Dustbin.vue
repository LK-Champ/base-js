<template>
  <span class="dustbin">
    🗑
  </span>
  <div class="animate-wrap">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="animate" v-show="animate.show">
        📋
      </div>
    </transition>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
let animate = reactive({
  show: false,
  el: null
});

function beforeEnter(el) {
  let dom = animate.el;
  let rect = dom.getBoundingClientRect();
  let x = window.innerWidth - rect.left - 60;
  let y = rect.top - 10;
  el.style.transform = `translate(-${x}px, ${y}px);`
}
function enter(el, done) {
  document.body.offsetHeight;
  el.style.transform = `translate(0, 0)`;
  el.addEventListener('transitionend', done)
}
function afterEnter(el) {
  animate.show = false;
  el.style.display = 'none';
}
function removeTodo(e, i) { 
  animate.el = e.target;
  animate.show = true;
}
</script>
<style>
.animate-wrap .animate {
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 100;
  transition: all 0.5s linear;
}
</style>