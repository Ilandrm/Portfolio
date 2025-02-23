<script setup lang="ts">

import Navbar from "~/components/utils/Navbar.vue";
import HeadHome from "~/components/utils/HeadHome.vue";
import Fonctionnement from "~/components/Triangle/Fonctionnement.vue";
import Garantis from "~/components/Triangle/Garantis.vue";
import Avantage from "~/components/Triangle/Avantage.vue";
import FAQ from "~/components/utils/FAQ.vue";
import Footer from "~/components/utils/Footer.vue";

const textFaq = [
  {
    quest:'Qu\'est-ce que le Fonds de garantie des assurances-vie ?',
    asnw:'Contrairement aux compagnies d’assurance vie française, qui en cas de défaut d’une compagnie d’assurance adhérente au fonds de garantie des assurés contre la défaillance de sociétés d’assurance, offrent à chaque souscripteur d’un contrat d’assurance vie une garantie maximale de 70 000 euros, les compagnies d’assurance luxembourgeoises mettent en avant un système de garantie différente qui repose sur le triangle de sécurité.'  },
  {
    quest:'Qu\'est-ce que le Fonds de résolution ?',
    asnw:'Le Fonds de Résolution pour l\'Assurance Vie (FRAVL) est un organisme créé au Luxembourg en 2016 pour protéger les assurés en cas de défaillance d\'une compagnie d\'assurance-vie. Le FRAVL est financé par les compagnies d\'assurance-vie elles-mêmes, qui doivent contribuer chaque année à un fonds de résolution commun.'  },
  {
    quest:'Qu\'est-ce que le Fonds interprofessionnel de compensation ?',
    asnw:'Le Fonds Interprofessionnel de Compensation pour l\'Assurance Vie (FICAV) est une entité spécifique au Luxembourg, créée en 1998.\n' +
        'Son rôle principal est de protéger les assurés en\n' +
        ' cas de défaillance d\'une compagnie d\'assurance-vie.'
  },
  {
    quest: 'Est-ce que toutes les compagnies d\'assurance-vie au Luxembourg sont soumises au triangle de sécurité ?',
    asnw: 'Vous pouvez vous en assurer que la compagnie d’assurance désirée est soumise au triangle de sécurité en vous connectant sur le site du commissariat aux assurances, qui est l’organe de surveillance des compagnies d’assurance au Luxembourg.'
  }
]
</script>

<template>
  <Navbar/>
  <HeadHome :triangle="true" />
  <Fonctionnement/>
  <Garantis/>
  <Avantage/>

  <FAQ :text="textFaq"/>
  <Footer/>
</template>

<style scoped>

</style>
