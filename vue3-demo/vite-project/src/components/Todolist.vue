<template>
  <div>
    <transition name="modal">
      <div class="info-wrapper" v-if="showModal">
        <div class="info">
          请输入，你现在什么也没有输入。
        </div>
      </div>
    </transition>
    <input type="text" v-model="title" @keydown.enter="addTodo">
    <ul v-if="todos.length">
      <transition-group name="flip-list" tag="ul">
        <li v-for="todo in todos" :key="todo.title">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }"> {{ todo.title }}</span>
        </li>
      </transition-group>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue';
let title = ref('');
let todos = ref([{ title: '1', done: false }]);
let showModal = ref(false);

function addTodo() {
  if (!title.value) {
    showModal.value = true;
    setTimeout(() => {
      showModal.value = false;
    }, 1500);

    return;
  }
  todos.value.push({
    title: title.value,
    done: false,
  });
  title.value = '';
}
</script>
<style>
h1 {
  color: red;
}
ul {
  margin: 0;
  padding: 0;
}

.info-wrapper {
  position: fixed;
  top: 20px;
  width: 200px;
}

.info {
  padding: 20px;
  color: white;
  background: #d88986;
}

.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}

.modal-enter-active {
  transition: all 0.3s ease;
}

.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.modal-leave-active {
  transition: all 0.3s ease;
}

.flip-list-move {
  transition: transform 0.8s ease;
}

.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}

.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>