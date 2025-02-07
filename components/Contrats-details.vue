<script setup lang="ts">
const props = defineProps(['src','notes','avantage'])
const emit = defineEmits(["back"]);

const sendEmit=()=>{
  emit('back')
}
</script>

<template>

<div class="contrat mx-auto mt-5">
  <div class="row">
   <div class="d-flex justify-content-between">
  <img class="logo col-3 mt-4 ms-4" alt="logo" :src="props.src">
    <i class="pi pi-arrow-left" style="font-size: 30px; margin-top: 5%;margin-right: 5%;cursor: pointer" @click="sendEmit"/>
   </div>
  </div>
  <div class="row">
    <div class="col-5 d-flex ">
      <div class="ms-5 mt-4">
      <div v-for="note in props.notes">
        <div class=" d-flex">
        <h3 class="fw-bold">{{note.title}}</h3>
         <div class="d-flex ms-4 ">
          <i class="pi pi-star-fill me-2" v-for="n in note.fill" style="font-size: 20px"/>
          <i class="pi pi-star me-2"  v-for="n in note.empty" style="font-size: 20px"/>
         </div>
        </div>
        <p>{{note.text}}</p>
      </div>
      </div>
    </div>
    <div class="col-7  mt-4 mx-auto h-25">
      <div class="d-flex justify-content-center">
      <div class="w-75">
      <h3 class="fw-bold d-flex justify-content-around">Presentation de la compagnie et notre avis</h3>
      <p class="d-flex justify-content-around" v-for="p in props.avantage.text">{{p}}</p>
      <p class="fw-bold d-flex justify-content-center">Il offre :</p>
      <p class="d-flex justify-content-center" v-for="p in props.avantage.offre">{{p}}</p>
      </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class=" col-3 d-flex justify-content-center w-50">
        <div class="mt-2 ">
          <i class="pi pi-plus-circle mb-2" style="font-size: 30px; display: flex; justify-content: center"/>
          <div class="mt-4">
          <p class="d-flex justify-content-center" v-for="plus in props.avantage.avantages">{{plus}}</p>
          </div>
        </div>
        </div>
        <div class="d-flex col-3 d-flex justify-content-center">
        <div class="w-50 mt-2">
          <i class="pi pi-minus-circle mb-2" style="font-size: 30px; display: flex; justify-content: center" />
          <p class="d-flex justify-content-center" v-for="minus in props.avantage.inconvenient">{{minus}}</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.contrat{
  background-color: #000b31;
  color: white;
  width: 80%;
  padding-bottom: 2%;
}
.logo{
  width: 10%;
}
p{
  margin: 0;
}

</style>
