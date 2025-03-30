<script setup lang="ts">
import {useMediaQuery} from "@vueuse/core";

const isMobile = useMediaQuery("(max-width: 768px)");

</script>

<template>
  <div class="footerP mt-5">
    <div class="row">
      <div class="col-3 mx-auto" v-if="!isMobile">
        <img class="logo mt-auto ms-auto w-50" alt="logo" src="../../public/logo-pali-blanc.png">
      </div>
      <div v-else class="col-12 col-md-3 d-flex justify-content-center mb-3 mb-md-0">
        <img class="logo w-50" alt="logo" src="../../public/logo-pali-blanc.png">
      </div>
      <div class="col-3 align-self-center">
        <ul>
          <NuxtLink to="/qui-sommes-nous">
          <li>Qui sommes nous </li>
          </NuxtLink>
          <NuxtLink to="/non-resident">
          <li>Non résident</li>
          </NuxtLink>
          <NuxtLink to="/triangle-de-securite">
          <li>Triangle de sécurité</li>
          </NuxtLink>
          <NuxtLink to="/comparatif-des-contrats.vue">
          <li>Comparatif des contrats</li>
          </NuxtLink>
          <NuxtLink to="/fiscalite">
          <li>Fiscalité</li>
          </NuxtLink>
          <NuxtLink to="/contact">
          <li>Contact</li>
          </NuxtLink>
        </ul>
      </div>
      <div class="col-6 align-self-center">
        <ul>
          <li class="mb-3">ds@palikaocapital.com</li>
          <li class="mb-3">58 rue Pierre Damours, 75017 Paris</li>
          <li><a href="tel:+33619813472" class="phone-link">06 19 81 34 72</a></li>
        </ul>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-3 d-flex flex-column">
        <NuxtLink to="/contact">
          <button class="btnfoot w-50"><label>Être rappelé</label></button>
        </NuxtLink>
        <NuxtLink to="/contact">
          <button class="btnfoot w-50 mt-4"><label>Prendre rendez-vous</label></button>
        </NuxtLink>
      </div>
      <div v-if="!isMobile" class="col-7 d-flex justify-content-between align-items-center">
        <img alt="company" class="company pb-5" src="../../public/AMF.png">
        <img alt="company" class="company" src="../../public/Orias.png">
        <img alt="company" class="company" src="../../public/CNCGP.png">
      </div>
      <div v-else class="col-12 col-md-7 d-flex flex-wrap justify-content-center justify-content-md-between align-items-center mt-4 mt-md-0">
        <img alt="company" class="company mx-2 my-2" src="../../public/AMF.png">
        <img alt="company" class="company mx-2 my-2" src="../../public/Orias.png">
        <img alt="company" class="company mx-2 my-2" src="../../public/CNCGP.png">
      </div>
    </div>
  </div>
</template>

<style scoped>
.footerP {
  background-color: #000b31;
  color: white;
  padding: 2%;
}

ul {
  list-style: none;
}
a{
  text-decoration: none;
  color: white;
}
.btnfoot {
  background-color: white;
  border: none;
  padding: 1%;
  height: 80px;
}

.btnfoot label {
  color: #000b31;
  font-weight: bold;
  font-size: 20px;
}

.company {
  width: 30%;
  object-fit: contain;
}

.logo {
  object-fit: contain;
}

.phone-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.phone-link:hover {
  text-decoration: underline;
}

/* Responsive pour mobile */
@media (max-width: 768px) {
  .row {
    text-align: center;
    width: 100%;
  }

  .col-3, .col-6, .col-7 {
    width: 100%;

  }

  .company {
    width: 20%;
  }

  .btnfoot {
    width: 100%;
    height: 60px;
    font-size: 18px;
  }

  .footerP {
    padding: 5%;
  }
}
</style>
