<script setup lang="ts">

import Navbar from "~/components/utils/Navbar.vue";
import HeadHome from "~/components/utils/HeadHome.vue";
import TextPhoto from "~/components/Home/TextPhoto.vue";
import Contrat from "~/components/Home/Contrat.vue";
import Avantages from "~/components/Home/Avantages.vue";
import TableComparatif from "~/components/Home/TableComparatif.vue";
import Souplesse from "~/components/Home/Souplesse.vue";
import FAQ from "~/components/utils/FAQ.vue";
import Footer from "~/components/utils/Footer.vue";
const textFaq = [
  {
    quest: "Quels sont les frais associés à un contrat d'assurance-vie luxembourgeoise ?",
    asnw: "Les frais associés à un contrat d’assurance-vie luxembourgeois peuvent varier en fonction de la compagnie d’assurance et du mode de gestion choisi. En général, les contrats d’assurance-vie luxembourgeois comportent des frais de gestion comme tout autre contrat d’assurance vie."
  },
  {
    quest: "Qu’est-ce que le crédit Lombard ?",
    asnw: "Le crédit Lombard est une solution de financement simple qui consiste à nantir votre contrat luxembourgeois en contrepartie d’un prêt. Il s’agit là d’une stratégie opportuniste lorsque l’on porte un intérêt à l’effet de levier. Ce prêt accordé par la banque dépositaire est utilisé pour dégager des liquidités immédiates et profiter d’opportunités de marchés. Ce nantissement donne également la possibilité d’utiliser ces liquidités pour financer un projet plus personnel comme l’achat d’une voiture ou d’un bien immobilier."
  },
  {
    quest: "Peut-on transférer un contrat d’assurance-vie français vers un contrat d’assurance-vie luxembourgeois ?",
    asnw: "Il est impossible de transférer un contrat d’assurance vie français vers un contrat luxembourgeois. La seule solution est de clôturer son contrat français et d’en ouvrir un autre au Luxembourg."
  }
];
</script>

<template>
<Navbar/>
<HeadHome class="mt-5" :home="true"/>
<TextPhoto class="mt-5"/>
  <contrat/>
  <Avantages/>
  <TableComparatif/>
  <Souplesse/>
  <FAQ :text="textFaq"/>
  <Footer/>
</template>

<style scoped>


</style>
