
<template>
    <h1>这是关于页面</h1>
    <input type="text" v-model="score" min="0" max="5">
    <RateDefault :value="score" />
    <Rate :value="score" />
</template>
<script setup>
import { ref } from "vue";
import RateDefault from "../components/RateDefault.vue";
import Rate from "../components/Rate.vue";

let score = ref(0);
</script>