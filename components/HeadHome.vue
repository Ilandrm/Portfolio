<script setup lang="ts">

</script>

<template>
<div class="content d-flex justify-content-around w-100">
  <div class="sub-content w-100">
  <div class="title">
  <h1 class="fw-bold">L'assurance vie au Luxembourg sur mesure titre en haut</h1>
  <h4 class="d-flex justify-content-around">0 frais d'entrée et aucune penalité de sortie</h4>
  </div>
    <div class="container-icone-line d-flex ">
      <img class="logo-company mx-5" alt="orias-logo" src="public/Orias.png">
    <div class="iconeContainer d-flex justify-content-around">
      <div class="icone d-flex flex-column">
      <img alt="icone"  class="imgSubject" src="public/Icontriangle.png">
      <label>
        Triangle de securité
      </label>
      </div>
      <div class=" icone d-flex flex-column">
        <img alt="icone"  class="imgSubject" src="public/Iconcircle.png">
        <label>
          Neutralité
        </label>
      </div>
      <div class="icone d-flex flex-column">
        <img alt="icone"  class="imgSubject" src="public/iconrentabilite.png">
        <label>
          Rentabilité
        </label>
      </div>
      <div class="icone d-flex flex-column">
        <img alt="icone" class="imgSubject" src="public/iconadministration.png">
        <label>
          Souplesse de gestion
        </label>
      </div>
    </div>
      <img class="logo-company mx-5" alt="cngcp-logo" src="public/CNCGP.png">
    </div>
    <button class="btnRDV"><label> Prendre rendez-vous</label></button>
  </div>
</div>
</template>

<style scoped>
.content {
  width: 100%;
  color: #d1dfde;
  background-color: #000b31;
  align-items: center;
  text-align: center;
  padding-bottom: 50px;
}
h1 {
  margin-top: 50px;
}
.iconeContainer {
  flex-grow: 1;
  align-items: center;
  width: 100%;
}

.icone {
  align-items: center;
}

.icone label {
  font-weight: bold;
  margin-top: 10px;
}

.container-icone-line {
  width: 100%;
  align-items: center;
  margin-top: 100px;

}

.logo-company {
  width: 150px;
  height: auto;

}
.imgSubject{
  width: 100px;
}
.btnRDV{
  width: 280px;
  height: 50px;
  background-color: #d1dfde;
  border:none;
  margin-top: 70px;
}
.btnRDV label{
  color: #000b31;
  font-weight: bold;
  font-size: 20px;
}
</style>
