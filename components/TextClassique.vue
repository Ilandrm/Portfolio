<script setup lang="ts">
const props = defineProps(['text']);
</script>

<template>
  <div v-for="(line, index) in props.text" :key="index" class="text-block mx-auto mt-3">
    <h1 class="mx-auto fw-bold">{{ line.titre }}</h1>
    <p class="mx-auto">{{ line.paragraphe }}</p>
    <hr class="w-80 mx-auto mb-3" v-if="index !== props.text.length-1"/>
  </div>
</template>

<style scoped>
.text-block {
  text-align: center;
  margin-bottom: 20px;
  font-family: 'GillSans', sans-serif;
  width: 50%;
}
.text-block p {
  font-size: 25px;
}
.text-block h1{
  font-size: 30px;
}
hr{
  border-top: 3px solid #000b31;
  opacity: 100%;
}
</style>
