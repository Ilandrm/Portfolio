<script setup lang="ts">
const props = defineProps(['text', 'title']);
</script>

<template>
  <h1 class="fw-bold mt-5 d-flex justify-content-center" v-if="props.title">{{ props.title }}</h1>
  <div class="d-flex justify-content-around responsContent mx-auto">
    <div class="d-flex justify-content-center responsBoxe">
      <div v-for="(line, index) in props.text" :key="index" class="text-block mt-3 me-2">
        <div class="d-flex flex-column align-items-center">
          <img class="icone mb-4" alt="img" :src="line.src" />
          <h1 class="fw-bold text-center mb-4">{{ line.titre }}</h1>
        </div>
        <p class="text-center">{{ line.paragraphe }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-block {
  text-align: center;
  margin-bottom: 20px;
  font-family: 'GillSans', sans-serif;
  background-color: #000b31;
  color: white;
  padding: 2%;
  border-radius: 7px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 25%;
}
.gold{
  background-color: rgba(201, 166, 70, 0.9);
}
.text-block p,
.blue-text-block p {
  font-size: 18px;
}

.text-block h1,
.blue-text-block h1 {
  font-size: 20px;
}

.responsContent {
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  justify-content: center; /* Correction pour l'alignement */
}
h1{
  font-size: 30px;
}
.icone{
  filter: brightness(0) saturate(100%) invert(65%) sepia(63%) saturate(406%) hue-rotate(8deg) brightness(94%) contrast(84%);}
@media (max-width: 768px) {
  .responsBoxe {
    flex-direction: column;
    align-items: center; /* Correction pour centrer les éléments */
    width: 100%;
  }

  .responsContent {
    justify-content: center;
  }

  .text-block {
    width: 90%; /* Pour qu'ils prennent toute la largeur */
  }
  h1 {
    font-size: 20px;
  }
  p {
    font-size: 15px;
  }
}

hr {
  border-top: 3px solid #000b31;
  opacity: 100%;
}

.icone {
  width: 80px;
  object-fit: contain;
}
</style>
