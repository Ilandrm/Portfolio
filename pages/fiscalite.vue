<script setup lang="ts">

import Navbar from "~/components/utils/Navbar.vue";
import HeadHome from "~/components/utils/HeadHome.vue";
import Neutralite from "~/components/fiscalite/neutralite.vue";
import OptionSortie from "~/components/fiscalite/OptionSortie.vue";
import VersementTable from "~/components/fiscalite/VersementTable.vue";
import FisaliteDeces from "~/components/fiscalite/FisaliteDeces.vue"
import Footer from "~/components/utils/Footer.vue";
</script>

<template>
<Navbar/>
<HeadHome :fiscalite="true"/>
  <neutralite/>
  <OptionSortie/>
  <VersementTable/>
  <FisaliteDeces/>
  <Footer/>
</template>

<style scoped>

</style>
