<script setup lang="ts">
import {ref} from "vue";
import TextClassique from "~/components/utils/TextClassique.vue";

const selectedBloc = ref<string | null>(null);

const toggleTitle = (type: string) => {
  selectedBloc.value = selectedBloc.value === type ? null : type;
};
const textPartenaire = [{
      titre:'',
  paragraphe: 'Les associés et collaborateurs de Pali Kao Capital bénéficient à la fois d\'une expérience et d\'une connaissance des marchés financiers et immobiliers.\n\nAfin d\'assurer un suivi attentif de nos investissements, nous échangeons de manière régulière avec les fonds sur lesquels nous vous conseillons d\'investir.\n\nUn de nos objectifs principaux est de sélectionner des partenaires alliant des qualités de réactivité, performance, solidité financière, et appliquant des frais de gestion dans les standards du marché.\n\nPour ce faire, nous avons audité plusieurs centaines de sociétés de gestion, assureurs et fournisseurs immobiliers afin de sélectionner les partenaires répondant à nos exigences.'
}]
</script>
<template>
  <h1 class="fw-bold d-flex justify-content-around mt-5 responsTitle">Nos Partenaires</h1>
  <TextClassique :text="textPartenaire"/>
  <div class="d-flex justify-content-around w-75 mx-auto">
    <div
        class="displayBloc me-5"
        :class="{ active: selectedBloc === 'financier' }"
        @click="toggleTitle('financier')"
    >
      <h5 class="fw-bold">Partenaires financiers</h5>
</div>

    <div
        class="displayBloc"
        :class="{ active: selectedBloc === 'immobillier' }"
        @click="toggleTitle('immobillier')"
    >
      <h5 class="fw-bold">Partenaires immobillier</h5>

    </div>

    <div
        class="displayBloc"
        :class="{ active: selectedBloc === 'assurances' }"
        @click="toggleTitle('assurances')"
    >
      <h5 class="fw-bold">Compagnies d'assurances partenaires</h5>

    </div>
      <div
          class="displayBloc"
          :class="{ active: selectedBloc === 'banquaire' }"
          @click="toggleTitle('banquaire')"
      >
        <h5 class="fw-bold">Partenaires banquaire</h5>

      </div>

  </div>
  <div class="mx-auto" v-if="selectedBloc === 'financier'">
    <transition name="fade">
      <div class="d-flex justify-content-center flex-wrap mt-5 parteners">
        <div class="partner">
          <a href="https://www.varennecapital.com/fr" target="_blank">
            <img src="public/partenaires/Varenne-capital-980x362.jpg" alt="Varenne Capital">
          </a>
        </div>
        <div class="partner">
          <a href="https://www.fidelityinternational.com/" target="_blank">
            <img src="public/partenaires/Fidelity-International-980x513.png" alt="Fidelity International">
          </a>
        </div>
        <div class="partner">
          <a href="https://www.comgest.com/fr" target="_blank">
            <img src="public/partenaires/Comgest-980x681.png" alt="Comgest">
          </a>
        </div>
        <div class="partner">
          <a href="https://www.pictet.com/fr/fr" target="_blank">
            <img src="public/partenaires/Pictet-Asset-Management-980x490.jpg" alt="Pictet Asset Management">
          </a>
        </div>
        <div class="partner">
          <a href="https://mabanque.bnpparibas/" target="_blank">
            <img src="public/partenaires/BNP-pariba-fix-300x142.jpg" alt="BNP Paribas">
          </a>
        </div>
        <div class="partner">
          <a href="https://www.morganstanley.com/" target="_blank">
            <img src="public/partenaires/Morgan-Stanley-Logo.png" alt="Morgan Stanley">
          </a>
        </div>
        <div class="partner">
          <a href="https://www.blackrock.com/fr" target="_blank">
            <img src="public/partenaires/Black-Rock.jpg" alt="BlackRock">
          </a>
        </div>
        <div class="partner">
          <a href="https://www.lazardfreresgestion.fr/FR/Accueil_81.html" target="_blank">
            <img src="public/partenaires/Lzard-frere-gestion.png" alt="Lazard Frères Gestion">
          </a>
        </div>
        <div class="partner">
          <a href="https://www.mandg.com/investments/fr" target="_blank">
            <img src="public/partenaires/MG_logo-980x519.png" alt="M&G Investments">
          </a>
        </div>
        <div class="partner">
          <a href="https://natixis.groupebpce.com/?lang=fr" target="_blank">
            <img src="public/partenaires/10-480x215.jpg" alt="Natixis">
          </a>
        </div>
        <div class="partner">
          <a href="https://www.swisslife.fr/home.html" target="_blank">
            <img src="public/partenaires/Swisslife.jpg" alt="Swiss Life">
          </a>
        </div>
        <div class="partner">
          <a href="https://www.oddo-bhf.com/fr" target="_blank">
            <img src="public/partenaires/ODDO-BHF-2.png" alt="ODDO BHF">
          </a>
        </div>

        <div class="partner">
          <a href="https://www.lfde.com/" target="_blank">
            <img src="public/partenaires/9-300x153.jpg" alt="La Financière de l'Échiquier">
          </a>
        </div>
        <div class="partner">
          <a href="https://am.jpmorgan.com/fr/fr/asset-management/adv/" target="_blank">
            <img src="public/partenaires/Aviva_Investors_Logo-e1670515569620-800x551.png" alt="J.P. Morgan">
          </a>
        </div>
        <div class="partner">
          <a href="https://www.lfde.com/fr-fr/" target="_blank">
            <img src="public/partenaires/echiquier.png" alt="La financière de l'échiquier logo grand">
          </a>
        </div>
      </div>
    </transition>
  </div>
  <div class="mx-auto" v-if="selectedBloc === 'immobillier'">
    <transition name="fade">
      <div class="d-flex justify-content-center flex-wrap mt-5 parteners">
      <div class="partner">
        <a href="https://www.icade.fr/" target="_blank">
          <img src="public/partenaires/Icade-logopng-e1670515652310.png" alt="Icade logo grand">
        </a>
      </div>
      <div class="partner">
        <a href="https://fidexi.com/" target="_blank">
          <img src="public/partenaires/immo-fidexi.gif" alt="Logo immo fidexi">
        </a>
      </div>
      <div class="partner">
        <a href="https://www.groupecir.com/" target="_blank">
          <img src="public/partenaires/IMMO-GROUPE-CIR.jpg" alt="Logo IMMO GROUPE CIR">
        </a>
      </div>
      <div class="partner">
        <a href="https://www.histoire-patrimoine.fr/" target="_blank">
          <img src="public/partenaires/Histoire-patrimoine-1.png" alt="Histoire patrimoine logo grand 2">
        </a>
      </div>
      <div class="partner">
        <a href="https://inovefa.com/partenaires.php" target="_blank">
          <img src="public/partenaires/Inovefa-partenaires.jpg" alt="Inovefa partenaires logo grand">
        </a>
      </div>
      <div class="partner">
        <a href="https://www.perl.fr/" target="_blank">
          <img src="public/partenaires/Perl-300x113.png" alt="Perl fix">
        </a>
      </div>
      <div class="partner">
        <a href="https://www.lesnouveauxconstructeurs.fr/" target="_blank">
          <img src="public/partenaires/LNC_logo_HD-scaled-e1671618028577.jpg" alt="LNC_logo_HD fix">
        </a>
      </div>
      <div class="partner">
        <a href="https://www.nexity.fr/" target="_blank">
          <img src="public/partenaires/Nexity-fix-2-1-480x272.jpg" alt="Nexity fix">
        </a>
      </div>
      <div class="partner">
        <a href="https://www.vinci-immobilier.com/" target="_blank">
          <img src="public/partenaires/VINCI-IMMOBILIER.jpg" alt="logo VINCI IMMOBILIER">
        </a>
      </div>
      </div>
    </transition>
  </div>
  <div class="mx-auto" v-if="selectedBloc === 'assurances'">
    <transition name="fade">
      <div class="d-flex justify-content-center flex-wrap mt-5 parteners">
        <div class="partner">
          <a href="https://www.varennecapital.com/fr" target="_blank">
            <img src="public/cardif.png" alt="Logo Cardif partenaires">
          </a>
        </div>
        <div class="partner">
          <a href="https://www.fidelityinternational.com/" target="_blank">
            <img src="public/partenaires/axa-fix.png" alt="axa logo fix">
          </a>
        </div>
        <div class="partner">
          <a href="https://www.comgest.com/fr" target="_blank">
            <img src="public/partenaires/Aviva_Investors_Logo-e1670515569620-800x551.png" alt="Aviva_Investors_Logo">
          </a>
        </div>
        <div class="partner">
          <a href="https://www.pictet.com/fr/fr" target="_blank">
            <img src="public/partenaires/Primonial-partenaire.jpg" alt="Pictet">
          </a>
        </div>
        <div class="partner">
          <a href="https://www.varennecapital.com/fr" target="_blank">
            <img src="public/partenaires/Swisslife.jpg" alt="Swisslife logo grand">
          </a>
        </div>
        <div class="partner">
          <a href="https://www.garance-mutuelle.fr/" target="_blank">
            <img src="public/partenaires/Garance.png" alt="Garance">
          </a>
        </div>

      </div>
    </transition>
  </div>

  <div class="mx-auto" v-if="selectedBloc === 'banquaire'">
    <transition name="fade">
      <div class="d-flex justify-content-center flex-wrap mt-5 parteners">
        <div class="partner">
          <a href="https://www.varennecapital.com/fr" target="_blank">
            <img src="public/partenaires/Banque-Hottinguer.png" alt="Banque Hottinguer">
          </a>
        </div>
        <div class="partner">
          <a href="https://www.lfde.com/fr-fr/" target="_blank">
            <img src="public/partenaires/echiquier.png" alt="La financière de l'échiquier logo grand">
          </a>
        </div>

      </div>
    </transition>
  </div>
  <hr class="w-100"/>

</template>

<style scoped>
img{
  width: 200px;
}
.parteners{
  max-width: 75%;
  margin-right: auto;
  margin-left:auto;
}
.partner{
  margin-right:1%;
  align-self: center;
}
.displayBloc {
  background-color: #f5f5f5;
  padding: 2%;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  max-width: 25%;
}

.displayBloc:hover, .displayBloc.active {
  background-color: #000b31;
  color: white;
}

/* Animation fade-in pour le texte */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, max-height 0.5s ease-in-out;
  max-height: 300px;
  overflow: hidden;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
