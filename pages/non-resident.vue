<script setup lang="ts">
import Navbar from "~/components/utils/Navbar.vue";
import HeadHome from "~/components/utils/HeadHome.vue";
import FAQ from "~/components/utils/FAQ.vue";
import Footer from "~/components/utils/Footer.vue";
import Souscription from "~/components/non-resident/Souscription.vue";
import FiscaliteResident from "~/components/non-resident/FiscaliteResident.vue";
import ExplicationSouscription from "~/components/non-resident/ExplicationSouscription.vue";
import Reglementation from "~/components/non-resident/Reglementation.vue";
import AvantageSouscription from "~/components/non-resident/AvantageSouscription.vue";

const textFaq = [
  {
    quest:'Qui peut souscrire à une assurance vie au Luxembourg en tant que non-résident ?',
    asnw:'Toute personne physique peu importe son domicile fiscal peut souscrire un contrat d’assurance vie au Luxembourg.\n' +
        'Il est cependant nécessaire de s’assurer que son pays de résidence fiscale est éligible dans les conditions générales de la compagnie d’assurance.'
  },
  {
    quest:'Comment choisir la meilleure compagnie d\'assurance pour souscrire à une assurance vie au Luxembourg en tant que non-résident ?',
    asnw:'"Le processus de souscription à une assurance vie au Luxembourg en tant que non-résident implique plusieurs étapes : choix de la compagnie d’assurance, sélection du type de contrat et des supports d’investissement, vérification des critères d’éligibilité liés à votre résidence fiscale, et finalisation avec la signature du contrat et le premier versement."\n'
  },
  {
    quest:'Quel est le processus de souscription à une assurance vie au Luxembourg en tant que non-résident ?',
    asnw:'Le processus de souscription est identique à celui d’une assurance vie française, à savoir : \n' +
        'Une évaluation de votre profil de risque afin de choisir les supports d’investissements adéquat à votre profil de risques. Une pièce d’identité, justificatif de domicile sont les pièces nécessaires afin de souscrire à une assurance vie Luxembourgeoise.'

  },
]
</script>
{
}
<template>
  <Navbar/>
<HeadHome resident="true"></HeadHome>
<Souscription/>
  <FiscaliteResident/>
  <ExplicationSouscription></ExplicationSouscription>
  <ContratComparatif/>
  <Reglementation></Reglementation>
  <AvantageSouscription></AvantageSouscription>
  <FAQ :text="textFaq"/>
  <Footer/>
</template>

<style scoped>

</style>
