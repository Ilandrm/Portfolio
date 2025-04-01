<script setup lang="ts">
useSeoMeta({
  title: 'Pali Kao Capital - Qui sommes nous ?',
  description: 'Pour bien exercer son métier, le CGP doit cumuler plusieurs compétences et exercer plusieurs métiers.'
});
import Navbar from "~/components/utils/Navbar.vue";
import HeadHome from "~/components/utils/HeadHome.vue";
import Associe from "~/components/Qui-sommes-nous/Associe.vue";
import WhyRetain from "~/components/Qui-sommes-nous/WhyRetain.vue";
import OurValue from "~/components/Qui-sommes-nous/OurValue.vue";
import Partenaires from "~/components/Qui-sommes-nous/Partenaires.vue";
import Accredidations from "~/components/Qui-sommes-nous/Accredidations.vue";
import Footer from "~/components/utils/Footer.vue";
</script>

<template>
<Navbar/>
<HeadHome :who="true"/>
  <Associe/>
  <WhyRetain/>
  <OurValue/>
  <Partenaires/>
  <Accredidations/>
  <Footer/>
</template>

<style scoped>

</style>
