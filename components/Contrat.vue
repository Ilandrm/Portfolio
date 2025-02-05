<script setup lang="ts">
</script>

<template>
  <h1 class="titleContrat d-flex justify-content-around mt-5 fw-bold ">Nos contrats d'assurance-vie luxembourgeoise</h1>
  <div class="contrats mx-auto mt-5 w-100">
    <div class="w-100 ">
    <div class="d-flex justify-content-around w-100">
      <img class="logo-contrat col-3" alt="onelife" src="public/onelife.png">
      <img class="logo-contrat col-6 w-25" alt="Lombard" src="public/Lombard.png">
      <img class="logo-contrat col-3" alt="generali" src="public/generali.png">
    </div>
    <div class="d-flex justify-content-around mt-5 w-100">
      <img class="logo-contrat col-3" alt="wealins" src="public/wealins.png">
      <img class="logo-contrat col-6 w-25" alt="cardif" src="public/cardif.png">
      <img class="logo-contrat col-3" alt="baloise" src="public/baloise.png">
    </div>
  </div>
  </div>
</template>

<style scoped>
.logo-contrat {
  border: 5px solid #000b31;
  flex-grow: 1;
  width: 200px;
  object-fit: contain;
  height: 300px;
  padding: 1%;
  aspect-ratio: auto;
  margin-right:2% ;
}
.contrats{
  max-width: 70%;
}
.titleContrat {
  color: #000b31;
}
</style>
