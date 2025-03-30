<script setup>
import { useMediaQuery } from "@vueuse/core";
import { ref } from "vue";

const isMobile = useMediaQuery("(max-width: 768px)");
const items = [
  { label: "Qui sommes-nous",link:"qui-sommes-nous" },
  { label: "Non résident",link:"non-resident" },
  { label: "Triangle de sécurité",link:"triangle-de-securite" },
  { label: "Comparatif des contrats",link:"comparatif-des-contrats" },
  { label: "Fiscalité",link:"fiscalite" },
  { label: "Contact",link:"contact" }
];

const menu = ref(false);
</script>

<template>
  <div class="w-100 tel d-flex justify-content-center align-items-center">
    <p class="mt-1 ms-4 p-0 m-0 text-center d-flex align-items-center">
      Prendre rendez-vous au 06 19 81 34 72
    </p>
  </div>
  <!-- Version Desktop -->
  <nav class="d-flex justify-content-around desktop-menu" v-if="!isMobile">
    <NuxtLink to="/">
    <img src="/LOGO%20PALI%20KAO.png" class="logo" alt="logo" />
    </NuxtLink>
    <NuxtLink to="/qui-sommes-nous">
    <h3>Qui sommes-nous</h3>
    </NuxtLink>
    <NuxtLink to="/non-resident">
    <h3>Non résident</h3>
    </NuxtLink>
    <NuxtLink to="/triangle-de-securite">
    <h3>Triangle de sécurité</h3>
    </NuxtLink>
    <NuxtLink to="/comparatif-des-contrats">
    <h3>Comparatif des contrats</h3>
    </NuxtLink>
    <NuxtLink to="/fiscalite">
    <h3>Fiscalité</h3>
    </NuxtLink>
    <NuxtLink to="/contact"><h3>Contact</h3></NuxtLink>
  </nav>

  <!-- Version Mobile -->
  <nav class="d-flex justify-content-between mobile-menu" v-if="isMobile">
    <NuxtLink to="/">
    <img src="/LOGO%20PALI%20KAO.png" class="logo" alt="logo" />
    </NuxtLink>
    <div class="menu-container">
      <Button class="btnBurger mt-5 me-3" icon="pi pi-bars" @click="menu = !menu">

      </Button>
      <transition name="fade">
        <div v-if="menu" class="menu-container-list mt-5">
          <ul>
            <li v-for="item in items" :key="item.label">
              <NuxtLink :to="item.link">
              <p class="fw-bold">{{ item.label }}</p>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<style scoped>
/* ✅ Styles généraux */
.tel{
  background-color: #000b31;
  color: #d1dfde;
  padding: 0;
}
.tel p{
  font-size: 18px;
 line-height: 1.5;
}
nav {
  color: #000b31;
}

h3 {
  align-self: center;
  font-size: 22px;
  font-weight: bold;
}

a {
  text-decoration: none;
  color: #000b31;
  align-self: center;
}

.logo {
  width: 200px;
}

.btnBurger {
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #000b31;
}

/* ✅ Fix du menu mobile */
.menu-container {
  position: relative;
}

.menu-container-list {
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #000b31;
  color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 220px;
  padding: 10px 0;
}

.menu-container-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-container-list li {
  padding: 12px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.menu-container-list li:last-child {
  border-bottom: none;
}

.menu-container-list p {
  margin: 0;
  font-weight: bold;
  text-align: center;
}

/* ✅ Effet au survol */
.menu-container-list li:hover {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}

/* ✅ Animation d'apparition/disparition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
@media (max-width: 768px) {
a{
  color: #fff;
}
}
</style>
