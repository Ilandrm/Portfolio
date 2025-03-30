<script setup lang="ts">
import {useMediaQuery} from "@vueuse/core";

const props = defineProps(['contact', 'home','resident','who','triangle','comparatif','fiscalite']);
const isMobile = useMediaQuery("(max-width: 768px)");

</script>

<template>
  <div class="content d-flex justify-content-around w-100 mt-5">
    <div class="sub-content w-100 mt-5" v-if="props.home ">
      <div class="title">
        <h1 class="fw-bold">L'assurance vie au Luxembourg sur mesure</h1>
        <h4 class="d-flex justify-content-around">0 frais d'entrée et aucune penalité de sortie</h4>
      </div>
      <div class="container-icone-line d-flex" v-if="!isMobile">
        <img class="logo-company mx-5" alt="orias-logo" src="../../public/Orias.png">
        <div class="iconeContainer d-flex justify-content-around">
          <div class="icone d-flex flex-column">
            <img alt="icone"  class="imgSubject" src="../../public/Icontriangle.png">
            <label>
              Triangle de securité
            </label>
          </div>
          <div class=" icone d-flex flex-column">
            <img alt="icone"  class="imgSubject" src="../../public/Iconcircle.png">
            <label>
              Neutralité
            </label>
          </div>
          <div class="icone d-flex flex-column">
            <img alt="icone"  class="imgSubject" src="../../public/iconrentabilite.png">
            <label>
              Rentabilité
            </label>
          </div>
          <div class="icone d-flex flex-column">
            <img alt="icone" class="imgSubject" src="../../public/iconadministration.png">
            <label>
              Souplesse de gestion
            </label>
          </div>
        </div>
        <img class="logo-company mx-5" alt="cngcp-logo" src="../../public/CNCGP.png">
      </div>

      <div v-if="isMobile">
        <div class="iconeContainer d-flex justify-content-around mt-5">
          <div>
            <div class="icone d-flex flex-column">
              <img alt="icone"  class="imgSubject" src="../../public/Icontriangle.png">
              <label>
                Triangle de securité
              </label>
            </div>
            <div class=" icone d-flex flex-column">
              <img alt="icone"  class="imgSubject" src="../../public/Iconcircle.png">
              <label>
                Neutralité
              </label>
            </div>
          </div>
          <div>
            <div class="icone d-flex flex-column">
              <img alt="icone"  class="imgSubject" src="../../public/iconrentabilite.png">
              <label>
                Rentabilité
              </label>
            </div>
            <div class="icone d-flex flex-column">
              <img alt="icone" class="imgSubject" src="../../public/iconadministration.png">
              <label>
                Souplesse de gestion
              </label>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink to="/contact">
      <button class="btnRDV"><label> Prendre rendez-vous</label></button>
      </NuxtLink>
    </div>
    <div v-else-if="props.contact" class="d-flex justify-content-center align-self-center mt-5">
      <i class="pi pi-address-book" style="font-size: 30px;"></i>
      <h1 class="fw-bold ms-3 mb-0">Contact</h1>
    </div>
    <div v-else-if="props.resident" class="d-flex justify-content-center align-self-center mt-5">
      <div class="align-self-center">
      <h1 class="fw-bold ms-3 mb-0">L'assurance vie Luxembourg pour les non resident</h1>
      <i class="pi pi-globe" style="font-size: 40px;"></i>
      </div>
    </div>

    <div v-else-if="props.who" class="who-container">
      <h1 class="who-title">Pali Kao en quelques chiffres</h1>
      <div class="who-stats">
        <div class="stat-box">
          <h2 class="stat-number">20</h2>
          <p class="stat-text">Années d'expérience</p>
        </div>
        <div class="stat-box">
          <h2 class="stat-number">2018</h2>
          <p class="stat-text">Date de création</p>
        </div>
        <div class="stat-box">
          <h2 class="stat-number">40</h2>
          <p class="stat-text">Millions d'euros conseillés</p>
        </div>
        <div class="stat-box">
          <h2 class="stat-number">100</h2>
          <p class="stat-text">Nombre de clients</p>
        </div>
      </div>
    </div>

    <div v-else-if="props.triangle" class="d-flex justify-content-center align-self-center mt-5">
      <div class="align-self-center">
        <h1 class="fw-bold ms-3 mb-0">Triangle de sécurité</h1>
        <h1 class="fw-bold ms-3 mb-0">pour les assurances-vie au Luxembourg</h1>

        <img class="imgSubject" src="public/Icontriangle.png" alt="logo">
      </div>
    </div>
  <div v-else-if="props.comparatif" class="d-flex justify-content-center align-self-center mt-5">
    <div class="align-self-center">
      <h1 class="fw-bold ms-3 mb-0">Assurance vie Luxembourg</h1>
      <h1 class="fw-bold ms-3 mb-0">Comparatif des meilleures offres</h1>

      <img class="imgSubject" src="public/comparatif.png" alt="logo">
    </div>
  </div>
  <div v-else-if="props.fiscalite" class="d-flex justify-content-center align-self-center mt-5">
    <div class="align-self-center">
      <h1 class="fw-bold ms-3 mb-0">Fiscalité de l’assurance vie au Luxembourg</h1>
      <img class="imgSubject" src="public/fiscalite.png" alt="logo">
    </div>
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
.iconeContainer {
  flex-grow: 1;
  align-items: center;
  width: 100%;
}
h1{
  margin-top: auto;
  text-align: center; /* Centrer le titre */
  letter-spacing: 2px; /* Espacement des lettres */
color: #c9a646;
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
.who-container {
  text-align: center;
  margin-top: 30px;
}

.who-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
}

.who-stats {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 30px;
}

.stat-box {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  min-width: 150px;
  transition: transform 0.3s ease;
}

.stat-box:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 40px;
  font-weight: bold;
}

.stat-text {
  font-size: 18px;
  color: #d1dfde;
}

/* Mobile responsive */
@media screen and (max-width: 768px) {
  .who-stats {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}

@media screen and (max-width: 768px) {
  .title {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
