<script setup lang="ts">
import {useMediaQuery} from "@vueuse/core";

const props = defineProps(['src', 'notes', 'avantage'])
const emit = defineEmits(["back"]);
const isMobile = useMediaQuery("(max-width: 768px)");

const sendEmit = () => {
  emit('back')
}
</script>

<template>

  <div class="contrat mx-auto mt-5">
    <div class="row">
      <div class="d-flex justify-content-between">
        <img class="logo col-3 mt-4 ms-4" alt="logo" :src="props.src">
        <i v-if="!isMobile" class="pi pi-arrow-left" style="font-size: 30px; margin-top: 5%;margin-right: 5%;cursor: pointer" @click="sendEmit" />
        <i v-if="isMobile" class="pi pi-arrow-left" style="font-size: 20px; margin-top: 10%;margin-right: 10%;cursor: pointer" @click="sendEmit" />

      </div>
    </div>

    <div class="row content-container">
      <div class="col-5 d-flex notes-container">
        <div class="ms-5 mt-4">
          <div v-for="note in props.notes" class="notes-div">
            <div class="d-flex">
              <h3 class="fw-bold">{{ note.title }}</h3>
              <div class="d-flex ms-4">
                <i class="pi pi-star-fill me-2" v-for="n in note.fill" style="font-size: 20px" />
                <i class="pi pi-star me-2" v-for="n in note.empty" style="font-size: 20px" />
              </div>
            </div>
            <p class="mb-3">{{ note.text }}</p>
          </div>
        </div>
      </div>

      <div class="col-7 mt-4 mx-auto h-25 avantage-container">
        <div class="d-flex justify-content-center responsAvantage">
          <div class="w-75 responsAvantage">
            <h3 class="fw-bold text-center">Présentation de la compagnie et notre avis</h3>
            <p class="text-center" v-for="p in props.avantage.text">{{ p }}</p>
            <p class="fw-bold text-center" v-if="props.avantage.offre">Il offre :</p>
            <p class="text-center" v-for="p in props.avantage.offre">{{ p }}</p>
          </div>
        </div>

        <div class="d-flex justify-content-center avantage-boxes">
          <div class="col-3 d-flex justify-content-center w-50">
            <div class="mt-2 w-75">
              <i class="pi pi-plus-circle mb-2" style="font-size: 30px; display: flex; justify-content: center" />
              <div class="mt-4">
                <p class="d-flex justify-content-center" v-for="plus in props.avantage.avantages">{{ plus }}</p>
              </div>
            </div>
          </div>

          <div class="d-flex col-3 d-flex justify-content-center" v-if="props.avantage.inconvenient">
            <div class="w-100 mt-2">
              <i class="pi pi-minus-circle mb-2" style="font-size: 30px; display: flex; justify-content: center" />
              <div class="mt-4">
              <p class="d-flex justify-content-around w-100" v-for="minus in props.avantage.inconvenient">{{ minus }}</p>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.contrat {
  background-color: #000b31;
  color: white;
  width: 80%;
  padding-bottom: 2%;
}

.logo {
  width: 10%;
  object-fit: contain;
}

p {
  margin: 0;
}

@media (max-width: 768px) {
  .notes-div{
    margin-bottom:10px ;
  }
  .content-container {
    display: flex;
    flex-direction: column;
  }

  .notes-container,
  .avantage-container {
    width: 90%;

  }

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 15px;
  }

  .avantage-boxes {
    flex-direction: column;
    align-items: center;

  }
  .logo{
    width:10px !important;
    max-width: 50px;

  }
  .col-3 {
    width: 100% !important;
  }
  .responsAvantage{
    width: 100%;
  }

}
</style>
