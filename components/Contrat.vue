<script setup lang="ts">
import {ContratsDetails} from "#components";
import {useMediaQuery} from "@vueuse/core";

const isMobile = useMediaQuery("(max-width: 768px)");
const isContratActif =ref(false)
const currentNote = ref([])
const currentAvantages = ref("")
const currentSrc = ref("")
const oneLife_note = [
  {
    title: "Qualité et solvabilité de l'assureur",
    fill: 4,
    empty:1,
    text: "Plus de 9 Milliards € sous gestion en 2022. Le ratio de solvabilité 139,8%."
  },
  {
    title: "Choix des supports",
    fill: 5,
    empty:0,
    text: "Plus de 400 OPCVM disponibles, d'une très grande qualité (tous les grands gestionnaires de fonds sont présents), grand choix de fonds de private equity. Nous noterons l'absence du fonds Euro."
  },
  {
    title: "Facilité et souplesse de gestion",
    fill: 4,
    empty:1,
    text: "Choix de devise : Dollar, Livre sterling, Franc suisse, Couronne danoise, Couronne suédoise. La couverture géographique : Espagne, France, Belgique, Luxembourg, Finlande, Suède, Danemark, Portugal, Royaume-Uni, avec développement en Amérique Latine. Réactivité importante dans l'ouverture de nouvelles zones géographiques. Un minimum de souscription de 100,000 euros. FID ou au FAS à partir de 125,000 euros. Large choix de résidence fiscale éligible avec une réactivité sur de nouvelles éligibilités."
  },
  {
    title: "Frais",
    fill: 5,
    empty:0,
    text: "0€ de frais d'entrée. 0€ de frais de dossier. 0€ de frais de versement. 0€ de frais d’arbitrage (à l'exception du minimum requis par la compagnie d’assurance). Frais de gestion : dégressifs en fonction du montant investi."
  }
]
const oneLife_avantage = {
  text: ["Spécialiste de l’assurance vie Luxembourg depuis 30 ans One Life appartient désormais au groupe APICIL (créé en 1938)",
    "APICIL occupe la 3e position sur le marché français de la protection sociale One Life est un des contrats les plus agiles et accessibles du marché",
    ],
  offre: [" - Une souplesse de gestion exemplaire.",
    " - Un grand choix de fonds de private equity.",
    " - Une grande flexibilité en termes de couverture géographique.",
    " - Back office irréprochable.",
    " - Des frais compétitifs.",
    " - Réactivité forte dans l'ouverture de nouvelles zones géographiques.",
    " - Digitalisation (offrant un accès permanent à votre épargne)."],
  avantages: [
    "Un des contrats les plus accessibles du marché",
"    Un minimum de souscription de 100.000 euros et un accès au FID ou au FAS à partir de 125.000 euros.",
        "Des frais compétitifs",
"    Réactivité forte dans l’ouverture de la couverture de nouvelles zones géographiques",
"Digitalisation (offrant un accès permanent à votre épargne)."
  ],
  inconvenient: [
    "Absence du fonds Euro."
  ]
}
const changeContrat = (contrat : string,src :string) => {
  isContratActif.value = true
  switch (contrat){
    case 'onelife':
      currentNote.value = oneLife_note;
      currentAvantages.value = oneLife_avantage
      currentSrc.value = src
  }
}

const reset = ()=>{
  isContratActif.value = false
  currentNote.value = []
  currentAvantages.value = {}
  currentSrc.value = ""
}
</script>

<template>
  <div v-if="!isContratActif">
  <h1 class="titleContrat d-flex justify-content-around mt-5 fw-bold ">Nos contrats d'assurance-vie luxembourgeoise</h1>
  <div class="contrats mx-auto mt-5 w-100" v-if="!isMobile">
    <div class="w-100 ">
    <div class="d-flex justify-content-around w-100 row">
      <img class="logo-contrat col-3" alt="onelife" src="public/onelife.png" @click="changeContrat('onelife','onelife.png')">
      <img class="logo-contrat col-6 w-25" alt="Lombard" src="public/Lombard.png">
      <img class="logo-contrat col-3" alt="generali" src="public/generali.png">
    </div>
    <div class="d-flex justify-content-around mt-5 w-100 row">
      <img class="logo-contrat col-3" alt="wealins" src="public/wealins.png">
      <img class="logo-contrat col-6 w-25" alt="cardif" src="public/cardif.png">
      <img class="logo-contrat col-3" alt="baloise" src="public/baloise.png">
    </div>
  </div>
  </div>
    <div v-else>
      <div class="contrats mx-auto mt-5 w-100" v-if="isMobile">
      <div class="row justify-content-center">
        <!-- Première colonne -->
        <div class="col-6 d-flex flex-column justify-content-around">
          <img class="logo-contrat" alt="onelife" src="public/onelife.png" @click="changeContrat('onelife','onelife.png')">
          <img class="logo-contrat" alt="Lombard" src="public/Lombard.png">
          <img class="logo-contrat" alt="generali" src="public/generali.png">
        </div>
        <!-- Deuxième colonne -->
        <div class="col-6 d-flex flex-column justify-content-around">
          <img class="logo-contrat" alt="wealins" src="public/wealins.png">
          <img class="logo-contrat" alt="cardif" src="public/cardif.png">
          <img class="logo-contrat" alt="baloise" src="public/baloise.png">
        </div>
      </div>
    </div>
    </div>
  </div>
  <div v-else>
    <ContratsDetails :src="currentSrc" :notes="currentNote" :avantage="currentAvantages" @back="reset"/>
  </div>
</template>

<style scoped>
.logo-contrat {
  border: 5px solid #000b31;
  flex-grow: 1;
  width: 200px;
  object-fit: contain;
  height: 300px;
  padding: 1%;
  aspect-ratio: auto;
  margin-right:2% ;
}
.logo-contrat:hover{
  background-color: rgba(209, 223, 222, 0.4);
  cursor: pointer;
}

.contrats{
  max-width: 70%;
}
.titleContrat {
  color: #000b31;
}
@media (max-width: 768px) {
  .logo-contrat {
    width: 100%;
    max-width: 150px;
    height: 100PX;
    padding: 1%;
    margin-bottom: 5px;
    border: 3px solid #000b31;

  }

  .titleContrat {
    font-size: 20px;
    margin-right:auto ;
    margin-left: auto;
    width: 75%;
  }
}
</style>
