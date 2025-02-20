<script setup lang="ts">
const props = defineProps(['text','blue_b','noHr','title']);
</script>

<template>
  <h1 class="fw-bold d-flex justify-content-around text-start mb-3" v-if="props.title">{{ props.title}}</h1>
  <div v-for="(line, index) in props.text" :key="index" class="text-block mx-auto" :class="{'blue-text-block':props.blue_b}">
    <h4 class="fw-bold mb-3" v-if="line.titre">{{ line.titre.toUpperCase() }}</h4>
    <p class="fw-bold mx-auto" v-if="line.sub">{{ line.sub }}</p>
    <p class="mx-auto">{{ line.paragraphe }}</p>
    <div class="mt-3" v-if="line.list" >
      <ul class="list-unstyled align-self-baseline text-start ">
        <li class="mt-3" v-for="li in line.list"><h5>- {{ li }}</h5></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.text-block,.blue-text-block {
  text-align: start;
  margin-bottom: 20px;
  font-family: 'GillSans', sans-serif;
  width: 50%;
  border-radius: 7px;
  backdrop-filter: blur( 0.5px );
  -webkit-backdrop-filter: blur( 0.5px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
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
  font-size: 25px;
}
hr{
  border-top: 3px solid #000b31;
  opacity: 100%;
}
h1{
  font-size: 30px;
}
h4{
  font-size: 19px;
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
