<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

const isMobile = useMediaQuery("(max-width: 768px)");
const props = defineProps(["paragraphe"]);
</script>

<template>
  <div class="d-flex justify-content-around responsContent">
    <div class="text-photo d-flex justify-content-between mt-2 flex-shrink-2" v-if="!isMobile">
      <div class="paragraphe widthPreDef me-3">
        <div>
          <h1 class="fw-bold">{{ props.paragraphe.title }}</h1>
          <h5 class="fw-bold mb-3 gold" v-if="props.paragraphe.sub">{{ props.paragraphe.sub }}</h5>
          <p v-for="(p, index) in props.paragraphe.text" :key="index">{{ p }}</p>
        </div>
      </div>
      <img class="imgPf widthPreDef" alt="icone" :src="props.paragraphe.src" />
    </div>

    <div v-if="isMobile">
      <div class="paragraphe widthPreDef me-3 w-100">
        <div>
          <h1 class="fw-bold d-flex justify-content-center ms-5 w-100">
            {{ props.paragraphe.title }}
          </h1>
          <div class="w-100">
            <p v-for="(p, index) in props.paragraphe.text" :key="index">{{ p }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-photo {
  display: flex;
  align-items: stretch;
  gap: 20px;
}

.paragraphe {
  border: solid 3px #000b31;
  padding: 3%;
  color: #000b31;
  display: flex;
  flex-direction: column; /* Pour que le contenu s'étire */
  justify-content: center;
  flex: 1; /* Remplit l’espace disponible */
}
.gold{
  background-color: rgba(201, 166, 70, 0.2);
  padding: 1%;
  border-radius: 5px;
  width: fit-content;
}
.imgPf {
  object-fit: cover; /* Remplit son conteneur sans se déformer */
  height: 100%; /* Adopte la hauteur du parent */
}

@media screen and (min-width: 768px) {
  .paragraphe p {
    font-size: 20px;
  }
}

.widthPreDef {
  width: 700px;
}

@media screen and (max-width: 768px) {
  .responsTitle {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
  }
  h1 {
    font-size: 20px;
  }
  .paragraphe p {
    font-size: 15px;
  }
}
</style>
