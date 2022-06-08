
<template>
  <div>
    <router-link to="/">首页</router-link> | 
    <router-link to="/about">关于</router-link> |
    <router-link to="/width">宽度</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <transition  name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
</script>