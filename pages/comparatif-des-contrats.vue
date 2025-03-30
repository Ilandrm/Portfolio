<script setup lang="ts">

import Navbar from "~/components/utils/Navbar.vue";
import HeadHome from "~/components/utils/HeadHome.vue";
import TextClassique from "~/components/utils/TextClassique.vue";
import SectionComparatif from "~/components/comparatifs/SectionComparatif.vue";
import Choix from "~/components/comparatifs/Choix.vue";
import Footer from "~/components/utils/Footer.vue";
import FAQ from "~/components/utils/FAQ.vue";
const textIntro = [
  {
    titre:'Comprendre l’assurance vie au Luxembourg',
    paragraphe:'L’assurance vie au Luxembourg est une enveloppe fiscale qui, comme son voisin français, permet au souscripteur de se constituer, de valoriser un capital, et de le transmettre. Cependant, il comporte certaines particularités qui lui confère plus de sécurité et de flexibilité.'
  }
]
const textFaq = [
  {
    quest:'Quels sont les avantages fiscaux de l\'assurance vie au Luxembourg ?',
    asnw:'• La neutralité fiscale en cas de vie :\n' +
        'Un des avantages fondamentaux du contrat luxembourgeois.\n' +
        'Il permet au souscripteur de bénéficier de la fiscalité de son actuelle ou future résidence fiscale.\n' +
        'Essentiel pour tout expatrié ou futur expatrié, qui n’auront ainsi pas besoin de rapatrier leurs actifs dans une autre compagnie financière.\n' +
        '\n' +
        '• Neutralité fiscale en cas de décès :\n' +
        'Le droit civil luxembourgeois ne taxe pas les capitaux décès versés aux bénéficiaires dès lors que l’assuré n’est pas résident fiscal luxembourgeois. La succession du défunt ne supportera que les droits de succession de son lieu de résidence, ou celle des bénéficiaires.'  },
  {
    quest:'Quelles sont les différences entre les produits d\'assurance vie proposés au Luxembourg ?',
    asnw:'Les différences se situent sur le nombre et la diversité des supports. La présence ou non du fonds Euros, l’étendue géographique, le choix des devises, le montant minium à investir dans un FAS ou FID etc...'  },
  {
    quest:'Comment choisir une assurance vie au Luxembourg qui convient le mieux à mes besoins ?',
    asnw:'Il est important de définir au préalable les objectifs du souscripteur\n' +
        'En fonction de ceux-ci (nature du contrat : contrat collectif, FID ou FAS, présence ou non du fonds Euro, nature des supports, choix de la devise et de l’étendue géographique etc..), le conseiller orientera le futur souscripteur vers le contrat souhaité.'
  },
  {
    quest: 'Comment comparer les offres d\'assurance vie au Luxembourg pour trouver la meilleure offre ?',
    asnw: 'Elles dépendent essentiellement de l’objectif du futur souscripteur.\n' +
        'En effet, les offres varient en fonction d’une multitude de critères.\n' +
        'Ces derniers orienteront le souscripteur vers le contrat répondant au mieux à ses objectifs.'
  },
  {
    quest:'Quels sont les avantages de souscrire une assurance vie au Luxembourg ?',
    asnw:'L’assurance vie au Luxembourg se définit par\n' +
        'La sécurité du contrat, \n' +
        'Sa souplesse de sa gestion et de sa fiscalité'
  }
]
</script>

<template>
<Navbar/>
  <HeadHome :comparatif="true"/>
  <div class="mt-5">
  <TextClassique :text="textIntro" :border="true"/>
  </div>
  <SectionComparatif/>
  <Choix/>
  <FAQ :text="textFaq"/>

  <Footer/>
</template>

<style scoped>

</style>
