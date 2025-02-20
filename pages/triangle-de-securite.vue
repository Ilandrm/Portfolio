<script setup lang="ts">

import Navbar from "~/components/utils/Navbar.vue";
import HeadHome from "~/components/utils/HeadHome.vue";
import Fonctionnement from "~/components/Triangle/Fonctionnement.vue";
import Garantis from "~/components/Triangle/Garantis.vue";
import Avantage from "~/components/Triangle/Avantage.vue";
</script>

<template>
  <Navbar/>
  <HeadHome :triangle="true" />
  <Fonctionnement/>
  <Garantis/>
  <Avantage/>
</template>

<style scoped>

</style>
