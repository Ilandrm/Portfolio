<script setup lang="ts">
import TextClassique from "~/components/utils/TextClassique.vue";
import BoxeText from "~/components/Home/BoxeText.vue";

const textComment = [
  {
    titre:"",
    paragraphe:"La démarche pour souscrire un contrat d’assurance vie au Luxembourg est identique à celle pour l’ouverture d’un contrat français. Cependant, les informations récoltées par votre conseil seront utilisées afin de vous orienter vers le mode de gestion et la compagnie d’assurance adéquats : gestion libre ou conseillée, FID ou FAS, vers la compagnie d’assurance répondant à vos orientations actuelles ou futures (Choix de la devise, éligibilité de votre contrat en cas d’expatriation au futur pays de résidence etc..)"
  },
  {
    titre:"Choix de la compagnie d'assurance et du type de contrat\n",
    paragraphe:"Critères essentiels à prendre en compte :"
  }
]
const textProfil = [
  {
    titre:"Évaluation de votre profil et de votre profil de risque",
    paragraphe:"A chaque souscription d’un contrat d’assurance vie, il est nécessaire que votre conseil évalue votre profil de risque afin de d’élaborer une allocation d’actifs en adéquation avec votre aversion aux risques. Ainsi, plus votre profil de risque sera évalué comme dynamique, plus les supports d’investissements seront dynamiques.Inversement, plus votre aversion aux risques est importante plus l’allocations d’actifs sera dirigée vers le fonds euro (capital garanti offrant un rendement annuel) ou des fonds obligataires, immobiliers ou flexibles.",

  }
]
</script>

<template>
  <div class="mt-5">
<TextClassique title="Comment souscrire à une assurance vie au Luxembourg en tant que non-résident ?" :text="textComment"/>
    <div class="d-flex  justify-content-center  divGLobal mt-3 ">
      <ul class="list-unstyled text-center">
        <li class="mt-3"><h5>Solvabilité financière de la compagnie</h5></li>
        <li class="mt-3"><h5>Réactivité du back office</h5></li>
        <li class="mt-3"><h5>Présence ou non du fonds euro</h5></li>
        <li class="mt-3"><h5>Diversité et qualité des supports d’investissement</h5></li>
        <li class="mt-3"><h5>Éligibilité de la compagnie selon la fiscalité du pays de résidence</h5></li>
      </ul>
    </div>


    <hr class="w-50 mx-auto mt-3">
    <TextClassique :text="textProfil"/>
  </div>
</template>

<style scoped>

h5{
  font-size: 20px;
  font-weight: bold;
}
hr{
  border-top: 3px solid #000b31;
  opacity: 100%;
}
.divIco {
  width: fit-content;
  margin: 0;
}

</style>
