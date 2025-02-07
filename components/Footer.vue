<script setup lang="ts">

</script>

<template>
  <div class="footerP mt-5">
<div class="row">
  <div class="col-3 mx-auto">
    <img class="logo mt-auto ms-auto w-50" alt="logo" src="public/logo-pali-blanc.png">
  </div>
  <div class="col-3 align-self-center">
    <ul>
      <li>Qui sommes nous </li>
      <li>Non résident</li>
      <li>Triangle de securité</li>
      <li>Comparatif des contrat </li>
      <li>Fiscalité</li>
      <li>Contact</li>
    </ul>
  </div>
  <div class="col-6 align-self-center">
    <ul>
      <li class="mb-3">ds@palikaocapital.com </li>
      <li class="mb-3">58 rue Pierre Damours, 75017 Paris</li>
      <li>06 19 81 34 72</li>
    </ul>
  </div>
</div>
    <div class="row mt-5">
      <div class="col-3 d-flex flex-column ">
        <button class="btnfoot w-50 "><label>Etre rappelée</label></button>
        <button class="btnfoot w-50 mt-4"><label> Prendre rendez-vous</label></button>
      </div>
      <div class="col-7 d-flex justify-content-between align-items-center">
        <img alt="company" class="company pb-5" src="public/AMF.png">
        <img alt="company" class="company" src="public/Orias.png">
        <img alt="company" class="company" src="public/CNCGP.png">

      </div>
    </div>
    </div>
</template>

<style scoped>
.footerP{
  background-color: #000b31;
  color:white;
  padding: 2%;
}
ul{
  list-style: none;
}
.btnfoot{
  background-color: white;
  border:none;
  padding: 1%;
  height: 80px;

}
.btnfoot label{
  color: #000b31;
  font-weight: bold;
  font-size: 20px;
}
.company{
  width: 30%;
  object-fit: contain;
}
.logo{
  object-fit: contain;
}
</style>
