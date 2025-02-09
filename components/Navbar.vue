<script setup>
import { useMediaQuery } from "@vueuse/core";
import { ref } from "vue";

const isMobile = useMediaQuery("(max-width: 768px)");
const items = [
  { label: "Qui sommes-nous" },
  { label: "Non résident" },
  { label: "Triangle de sécurité" },
  { label: "Comparatif des contrats" },
  { label: "Fiscalité" }
];

const menu = ref(false);
</script>

<template>
  <!-- Version Desktop -->
  <nav class="d-flex justify-content-around desktop-menu" v-if="!isMobile">
    <NuxtLink to="/">
    <img src="/LOGO%20PALI%20KAO.png" class="logo" alt="logo" />
    </NuxtLink>
    <h3>Qui sommes-nous</h3>
    <h3>Non résident</h3>
    <h3>Triangle de sécurité</h3>
    <h3>Comparatif des contrats</h3>
    <h3>Fiscalité</h3>
    <NuxtLink to="/contact"><h3>Contact</h3></NuxtLink>
  </nav>

  <!-- Version Mobile -->
  <nav class="d-flex justify-content-between mobile-menu" v-if="isMobile">
    <img src="/LOGO%20PALI%20KAO.png" class="logo" alt="logo" />
    <div class="menu-container">
      <Button class="btnBurger mt-5 me-3" icon="pi pi-bars" @click="menu = !menu">

      </Button>
      <transition name="fade">
        <div v-if="menu" class="menu-container-list mt-5">
          <ul>
            <li v-for="item in items" :key="item.label">
              <p class="fw-bold">{{ item.label }}</p>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<style scoped>
/* ✅ Styles généraux */
nav {
  color: #000b31;
}

h3 {
  align-self: center;
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
</style>
