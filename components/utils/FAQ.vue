<script setup lang="ts">
const question = ref([false,false,false])


const props= defineProps(['text'])

</script>

<template>
  <div class="d-flex justify-content-center">
    <div>
      <h1 class="fw-bold text-center title">FAQ</h1>
      <div class="question mt-5 mx-auto">

        <div class="d-flex w-100 align-items-start mt-3" v-for="(line,index) in props.text">
          <i class="pi pi-arrow-circle-right" style="font-size: 40px; cursor: pointer" @click="question[index] = true" v-if="!question[index]"/>
          <i class="pi pi-arrow-circle-down" style="font-size: 40px; cursor: pointer" @click="question[index] = false" v-if="question[index]"/>
          <div class="ms-3">
            <h1 class="fw-bold">{{line.quest}}</h1>
            <p v-if="question[index]" class="w-100 ms-2">{{line.asnw}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question {
  max-width: 80%;
  width: 80%;
  margin: 0 auto;
}
h1 {
  font-size: 30px;
}
.title {
  font-size: 40px;
}
p {
  max-width: 800px;
  font-size: 20px;
  word-break: break-word;
}
</style>
