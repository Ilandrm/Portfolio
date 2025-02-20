<script setup lang="ts">
import {useMediaQuery} from "@vueuse/core";
import ContratsDetails from "~/components/Home/Contrats-details.vue";

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

const lombardInternational_note = [
  {
    title: "Qualité et solvabilité de l'assureur",
    fill: 5,
    empty: 0,
    text: "Plus de 47 milliards sous administration. Note S&P : A+. Solvabilité : 136,6%."
  },
  {
    title: "Choix des supports",
    fill: 4,
    empty: 1,
    text: "Fonds externes à la demande. Absence du fonds Euro."
  },
  {
    title: "Facilité et souplesse de gestion",
    fill: 5,
    empty: 0,
    text: "FID et FAS à partir de 250 000 € . Couverture géographique la plus étendue du marché ,présent dans 25 pays  dont l’ Afrique du sud, Allemagne, Belgique, Brésil, Chine, Chypre, Colombie, Espagne, Etats-Unis, Finlande, France Indonésie, Israël, Italie, Luxembourg, Mexique, Norvège, Pérou, Portugal, Royaume-Uni, Suède, Taïwan et Turquie."
  },
  {
    title: "Frais",
    fill: 5,
    empty: 0,
    text: "0€ de frais d'entrée, de dossier, de versement et d'arbitrage (hors minimum requis par la compagnie d’assurance). Frais de gestion dégressifs selon le montant investi."
  }
];
const lombardInternational_avantage = {
  text: [
    "Fondée en 1991, Lombard International Assurance est une compagnie d’assurance-vie dont le siège social est situé au Luxembourg.",
    "Rachetée en 2014 par Blackstone, elle opère dans 25 pays et gère plus de 47 milliards d’actifs sous administration en 2022.",
    "Lombard International Assurance offre une couverture géographique la plus vaste des assureurs opérant au Luxembourg, un grand savoir-faire en private equity et des solutions innovantes adaptées aux besoins des clients."
  ],
  avantages: [
    "Couverture géographique la plus vaste des assureurs opérant au Luxembourg (présent dans 25 pays : Europe, Amérique et Asie).",
    "Offre de private equity élargie.",
    "Solvabilité financière : note A+, renforcée depuis son rachat par Blackstone.",
    "Digitalisation (offrant un accès permanent à votre épargne)."
  ],
  inconvenient: [
    "Absence du fonds Euro."
  ]
};
const baloise_note = [
  {
    title: "Qualité et solvabilité de l'assureur",
    fill: 5,
    empty: 0,
    text: "Plus de 10 Milliards € sous gestion.\nSolvabilité financière 137%.\nRating S&P : A+."
  },
  {
    title: "Choix des supports",
    fill: 4,
    empty: 1,
    text: "Choix sur près de 500 OPCVM dont beaucoup d'ETF.\nExpertise sur le private equity."
  },
  {
    title: "Facilité et souplesse de gestion",
    fill: 5,
    empty: 0,
    text: "Souscription à partir de : 50 000 EUR.\nFID : 250 000 EUR.\nFAS : 500 000 EUR.\nChoix de la devise du contrat : EUR, USD, GBP, CHF."
  },
  {
    title: "Frais",
    fill: 5,
    empty: 0,
    text: "0€ de frais d'entrée.\n0€ de frais de dossier.\n0€ de frais de versement.\n0€ de frais d’arbitrage (à l'exception du minimum requis par la compagnie d’assurance).\nFrais de gestion : dégressifs en fonction du montant investi."
  }
];

const baloise_avantage = {
  text: [
    "Présentation de la compagnie et avis de pali Kao Capital : La fondation Bale a été créée en 1863, spécialisée au départ sur l’assurance incendie, elle est à l'origine de La Baloise, qui a vu le jour en 1996.",
    "Baloise Vie Luxembourg se concentre sur la distribution en libre Prestation de Service de produits d'assurance-vie.",
    "Une des compagnies d’assurance vie Luxembourgeoise les plus accessibles du marché avec un ticket d'entrée en gestion de 50 000 Euros.",
    "Présence importante d'ETF.",
    "Une véritable expertise sur le private equity."
  ],
  avantages: [
    "Possibilité de mettre des comptes à terme rémunérés pour remplacer le fonds euros.",
    "Expertise en private equity.",
    "Digitalisation (offrant un accès permanent à votre épargne).",
    "Service d'urgence 24/24 7/7 qui permet de joindre l'assureur rapidement."
  ],
  inconvenient: [
    "Absence du fonds euro.",
    "Uniquement trois banques dépositaires pour le FAS : Quintet, SGBT et Degroof Petercam."
  ]
};
const cardif_note = [
  {
    title: "Qualité et solvabilité de l'assureur",
    fill: 5,
    empty: 0,
    text: "28 milliards d'euros d'actifs sous gestion.\n300 collaborateurs de 20 nationalités différentes.\n130 banques dépositaires.\nRatio de solvabilité : 135%.\nLa couverture géographique concerne six pays européens [France, Belgique, Espagne, Italie, Luxembourg, Portugal] et douze en dehors de l'Union Européenne [Grande-Bretagne, Monaco, Israël, Saint-Marin, Nouvelle-Calédonie, Île Maurice, Saint-Barthélemy et en Asie, Chine, Hong-Kong et Singapour]."
  },
  {
    title: "Choix des supports",
    fill: 4,
    empty: 1,
    text: "Présence du fonds euro.\n350 fonds externes proposés."
  },
  {
    title: "Facilité et souplesse de gestion",
    fill: 5,
    empty: 0,
    text: "Souscription à partir de 250 000 EUR.\nFID : 250 000 EUR."
  },
  {
    title: "Frais",
    fill: 5,
    empty: 0,
    text: "0€ de frais d'entrée.\n0€ de frais de dossier.\n0€ de frais de versement.\n0€ de frais d'arbitrage (à l'exception du minimum requis par la compagnie d'assurance).\nFrais de gestion : dégressifs en fonction du montant investi."
  }
];

const cardif_avantage = {
  text: [
    "Créée en 1994, Cardif Lux Vie est la filiale d’assurance-vie luxembourgeoise du Groupe BNP Paribas.",
    "Le Contrat d’assurance vie cardif luxembourg, Liberty 2 invest est un des contrats phares du marché de l’assurance vie au Luxembourg.",
    "Adossé à un des plus grands groupes bancaires européens.",
    "• Expertise reconnue.",
    "• Large gamme de fonds disponibles.",
    "• Back office très réactif.",
    "• Adossement à BNP Paribas, un des plus grands groupes bancaires européens."
  ],
  avantages: [
    "Présence du fonds euro (rendement brut de frais et de fiscalité en 2022 : 2.75%).",
    "Possibilité d’investir 100% Fonds Euro. Nom réassuré et ainsi non éligible à la loi Sapin 2.",
    "Large gamme de fonds disponible."
  ],
  inconvenient: [
    "ETF non disponibles en gestion libre.",
    "Face non disponible."
  ]
};
const wealins_note = [
  {
    title: "Qualité et solvabilité de l'assureur",
    fill: 5,
    empty: 0,
    text: "13,5 milliards € d'actifs sous administration. Détenu à 100% par le groupe Foyer, 1er assureur au Luxembourg."
  },
  {
    title: "Choix des supports",
    fill: 4,
    empty: 1,
    text: "Plus de 350 OPCVM disponibles. Absence de fonds euro."
  },
  {
    title: "Facilité et souplesse de gestion",
    fill: 5,
    empty: 0,
    text: "Souscription à partir de 125 000€. FID : Minimum 125 000€. FAS : Minimum 125 000€. Devises : EUR, USD, GBP, CHF. Éligible sur les pays suivants : Allemagne, Belgique, Espagne, France, Italie, Luxembourg, Portugal, Royaume-Uni, Norvège, Suède et Finlande."
  },
  {
    title: "Frais",
    fill: 5,
    empty: 0,
    text: "0€ de frais d'entrée. 0€ de frais de dossier. 0€ de frais de versement. 0€ de frais d’arbitrage (à l'exception du minimum requis par la compagnie d'assurance). Frais de gestion : dégressifs en fonction du montant investi."
  }
]

const wealins_avantage = {
  text: [
    "WEALINS est une entité du Groupe Foyer, leader de l’assurance au Luxembourg depuis 1922 et premier groupe à capital privé luxembourgeois.",
    "Forte de presque 30 ans d'expérience et d'un savoir-faire paneuropéen dans l'élaboration de solutions transfrontalières, la compagnie opère sous le régime de la Libre Prestation de Services (LPS)."
  ],
  offre: [
    "Un des contrats les plus accessibles en FAS et FID.",
    "Solvabilité de la maison mère."
  ],
  avantages: [
    "Solvabilité financière : Wealinks est détenu à 100% par le groupe Foyer, 1er assureur au Luxembourg.",
    "Gestion du FAS."
  ],
  inconvenient: [
    "Absence de fonds en euros.",
    "Absence d'ETF en gestion libre."
  ]
}

const generali_note = [
  {
    title: "Qualité et solvabilité de l'assureur",
    fill: 5,
    empty: 0,
    text: "74,2 milliards d'euros du chiffre d'affaires. 55 millions de clients à travers le monde. 76 000 collaborateurs. Ratio de solvabilité : 186,7%."
  },
  {
    title: "Choix des supports",
    fill: 4,
    empty: 1,
    text: "Présence du fonds Euros à hauteur de 40% maximum de la globalité du contrat (taux 2022 : 1,8% brut sans compter les bonus possibles qui varient en fonction du pourcentage d'UC). Des Fonds Externes parmi plus de 900 disponibles, dont près de 700 fonds ESG. Des Actifs Non Cotés (Infrastructures ou Private Equity)."
  },
  {
    title: "Facilité et souplesse de gestion",
    fill: 5,
    empty: 0,
    text: "Souscription minimum : 250 000€. FID : 250 000€ minimum. FAS : 500 000€ minimum. Back office réactif, grand choix de supports, arbitrage en ligne."
  },
  {
    title: "Frais",
    fill: 5,
    empty: 0,
    text: "0€ de frais d'entrée. 0€ de frais de dossier. 0€ de frais de versement. 0€ de frais d'arbitrage (à l'exception du minimum requis par la compagnie d'assurance)."
  }
];

const generali_avantage = {
  text: [
    "Créée à Trieste en 1831, Generali s'est développée dans toutes les branches de l'assurance et dans plus de 60 pays à travers le monde.",
    "Il figure parmi les principaux groupes mondiaux de services financiers.",
    "Premier assureur vie européen, Generali offre la sécurité indispensable d'un grand groupe à la solidité reconnue.",
    "Compagnie incontournable d'assurance vie au Luxembourg, Generali est un des leaders du marché."
  ],
  offre: [
    " - Back office irréprochable.",
    " - Nombre et diversité des supports d'investissements très pertinent.",
    " - Présence du fonds Euros sur son contrat (taux 2022 : 1,8% brut sans compter les bénéfices possibles)."
  ],
  avantages: [
    "Présence du fonds euro",
    "Solvabilité financière",
    "Digitalisation (offrant un accès permanent à votre épargne)."
  ],
  inconvenient: [
    "Accès au private equity limité aux clients de Catégorie D."
  ]
};

const changeContrat = (contrat : string,src :string) => {
  isContratActif.value = true
  switch (contrat) {
    case 'onelife':
      currentNote.value = oneLife_note;
      currentAvantages.value = oneLife_avantage;
      currentSrc.value = src;
      break;
    case 'lombard':
      currentNote.value = lombardInternational_note;
      currentAvantages.value = lombardInternational_avantage;
      currentSrc.value = src;
      break;
    case 'baloise':
      currentNote.value = baloise_note;
      currentAvantages.value = baloise_avantage;
      currentSrc.value = src;
      break;
    case 'cardif':
      currentNote.value = cardif_note;
      currentAvantages.value = cardif_avantage;
      currentSrc.value = src;
      break;
    case 'wealins':
      currentNote.value = wealins_note;
      currentAvantages.value = wealins_avantage;
      currentSrc.value = src;
      break;
    case 'generali':
      currentNote.value = generali_note;
      currentAvantages.value = generali_avantage;
      currentSrc.value = src;
      break;
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
      <img class="logo-contrat col-3" alt="onelife" src="../../public/onelife.png" @click="changeContrat('onelife','onelife.png')">
      <img class="logo-contrat col-6 w-25" alt="Lombard" src="../../public/Lombard.png" @click="changeContrat('lombard','Lombard.png')">
      <img class="logo-contrat col-3" alt="generali" src="../../public/generali.png" @click="changeContrat('generali','generali.png')">
    </div>
    <div class="d-flex justiLombardfy-content-around mt-5 w-100 row">
      <img class="logo-contrat col-3" alt="wealins" src="../../public/wealins.png" @click="changeContrat('wealins','wealins.png')">
      <img class="logo-contrat col-6 w-25" alt="cardif" src="../../public/cardif.png" @click="changeContrat('cardif','cardif.png')">
      <img class="logo-contrat col-3" alt="baloise" src="../../public/baloise.png" @click="changeContrat('baloise','baloise.png')">
    </div>
  </div>
  </div>
    <div v-else>
      <div class="contrats mx-auto mt-5 w-100" v-if="isMobile">
      <div class="row justify-content-center">
        <!-- Première colonne -->
        <div class="col-6 d-flex flex-column justify-content-around">
          <img class="logo-contrat" alt="onelife" src="../../public/onelife.png" @click="changeContrat('onelife','onelife.png')">
          <img class="logo-contrat" alt="Lombard" src="../../public/Lombard.png" @click="changeContrat('lombard','Lombard.png')">
          <img class="logo-contrat" alt="generali" src="../../public/generali.png" @click="changeContrat('generali','generali.png')">
        </div>
        <!-- Deuxième colonne -->
        <div class="col-6 d-flex flex-column justify-content-around">
          <img class="logo-contrat" alt="wealins" src="../../public/wealins.png" @click="changeContrat('wealins','wealins.png')">
          <img class="logo-contrat" alt="cardif" src="../../public/cardif.png" @click="changeContrat('cardif','cardif.png')">
          <img class="logo-contrat" alt="baloise" src="../../public/baloise.png" @click="changeContrat('baloise','baloise.png')">
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
  border-radius: 7px;
  flex-grow: 1;
  width: 200px;
  object-fit: contain;
  height: 300px;
  padding: 1%;
  aspect-ratio: auto;
  margin-right:2% ;
}
.logo-contrat:hover{
  background-color: rgba(201, 166, 70, 0.1);
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
