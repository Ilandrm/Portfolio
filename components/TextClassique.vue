<script setup lang="ts">
const props = defineProps(['text','blue_b','noHr','title']);
</script>

<template>
  <h1 class="fw-bold mt-5 d-flex justify-content-center" v-if="props.title">{{ props.title }}</h1>
  <div v-for="(line, index) in props.text" :key="index" class="text-block mx-auto " :class="{'blue-text-block':props.blue_b}">
    <h4 class="mx-auto fw-bold mb-3">{{ line.titre }}</h4>
    <p class="mx-auto">{{ line.paragraphe }}</p>
    <hr class="w-80 mx-auto mb-5" v-if="index !== props.text.length-1 && !props.noHr"/>
  </div>
</template>

<style scoped>
.text-block,.blue-text-block {
  text-align: center;
  margin-bottom: 20px;
  font-family: 'GillSans', sans-serif;
  width: 50%;
}
.blue-text-block{
  background-color: #000b31;
  color: white;
  padding: 2%;
}
.text-block p , .blue-text-block p{
  font-size: 20px;
}
.text-block h1, .blue-text-block h1{
  font-size: 30px;
}
hr{
  border-top: 3px solid #000b31;
  opacity: 100%;
}
@media (max-width: 768px) {
  h1{
    font-size: 20px;
  }
  h4{
    font-size: 17px;
  }
  p{
    font-size: 15px;
  }
  .text-block,.blue-text-block {
    width: 80%;
  }
}
</style>
