<script setup lang="ts">
import {Formulaire} from "#components";
import Navbar from "~/components/utils/Navbar.vue";
import HeadHome from "~/components/utils/HeadHome.vue";
import Footer from "~/components/utils/Footer.vue";
useSeoMeta({
  title: 'Pali Kao Capital - Formulaire de contact',
  description: 'Vous voulez prendre rendez-vous ? Contactez-nous.',
});
</script>

<template>
<Navbar/>
<HeadHome :contact="true" class="mt-5"/>
  <Formulaire/>
  <Footer class="mt-5"/>
</template>

<style scoped>

</style>
