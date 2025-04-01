<script setup lang="ts">
useSeoMeta({
  title: 'Pali Kao Capital - Fiscalité',
  description: 'L’un des piliers et des atouts de l’assurance vie au Luxembourg est la neutralité fiscale. Cela signifie que la fiscalité appliquée est celle du pays de résidence fiscale de l’assuré. '
});
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
