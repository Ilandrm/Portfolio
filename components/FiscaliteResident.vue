<script setup lang="ts">
import { ref } from "vue";
import TextClassique from "~/components/utils/TextClassique.vue";

const textFisc = [{
  titre: 'Fiscalité avantageuse pour les non-résidents',
  paragraphe: 'L’avantage fiscal de l’assurance vie au Luxembourg repose sur la neutralité du cadre fiscal. ' +
      'Un contrat d’assurance vie luxembourgeois prend la fiscalité du pays de résidence fiscale de l’assuré. ' +
      'Ainsi, ce sont les dispositifs fiscaux du pays de résidence fiscale du souscripteur qui s’appliquent.'
}];

const textInvesstissement = [{
  paragraphe: 'Le contrat d’assurance vie au Luxembourg offre une plus grande flexibilité en termes de gestion. ' +
      'Grâce au FID ou au FAS, le souscripteur du contrat bénéficie d’une plus grande souplesse pour son investissement.'
}];

const textGarantis = [{
  titre: 'Garantie de remboursement pour protéger votre capital',
  paragraphe: 'Il est possible de souscrire une garantie décès afin de garantir son capital en cas de décès. ' +
      'Le coût de cette garantie dépend de l’âge du souscripteur et du montant investi.'
}];

const selectedBloc = ref<string | null>(null);

const getTitle = (type: string) => {
  if (selectedBloc.value === type) {
    return type === "FID" ? "Fonds interne dédié" : "Fonds d'assurance spécialisé";
  }
  return type;
};

const toggleTitle = (type: string) => {
  selectedBloc.value = selectedBloc.value === type ? null : type;
};
</script>

<template>
  <div class="mt-5">
    <TextClassique :text="textFisc" :blue_b="true"/>
  </div>
  <div class="mt-5">
    <TextClassique :text="textInvesstissement" title="Investissement personnalisé et diversifié"/>
  </div>

  <div class="d-flex justify-content-center">
    <div
        class="displayBloc me-5"
        :class="{ active: selectedBloc === 'FID' }"
        @click="toggleTitle('FID')"
    >
      <h5 class="fw-bold">{{ getTitle('FID') }}</h5>
      <transition name="fade">
        <p v-if="selectedBloc === 'FID'">
          Le FID (Fonds Interne Dédié) a été conçu afin de permettre au souscripteur de mettre en place une gestion individuelle sous mandat dédiée. Il est géré par une Société de gestion agréée pour le compte du souscripteur qu’il soit résident français ou non.
          Cela permet au souscripteur du contrat de ne pas se préoccuper de la gestion financière.
        </p>
      </transition>
    </div>

    <div
        class="displayBloc"
        :class="{ active: selectedBloc === 'FAS' }"
        @click="toggleTitle('FAS')"
    >
      <h5 class="fw-bold">{{ getTitle('FAS') }}</h5>
      <transition name="fade">
        <p v-if="selectedBloc === 'FAS'">
          Un FAS se définit par le fait que le souscripteur prend la main sur le contenu de son allocation. Il ne connait aucune restriction et n’est pas obligé de déléguer la gestion au travers d’un mandat. Il a le choix entre une multitude d’actifs (SICAV/FCP, produits structurés, actifs non côtés, titres vifs).
          Le souscripteur a la possibilité de se faire accompagner dans la gestion financière par un conseiller financier en lui octroyant un mandat de conseil qui est matérialisé par un accord quadripartite (souscripteur, conseiller financier, assureur et dépositaire).
        </p>
      </transition>
    </div>
  </div>

  <div class="mt-3">
    <TextClassique :text="textGarantis"/>
    <hr class="w-100 mb-3"/>
  </div>
</template>

<style scoped>
.displayBloc {
  background-color: #f5f5f5;
  padding: 2%;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  max-width: 25%;
}

.displayBloc:hover, .displayBloc.active {
  background-color: #c9a646;
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
