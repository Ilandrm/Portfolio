<script setup lang="ts">
import TextClassique from "~/components/utils/TextClassique.vue";

const textNeutre = [
  {titre: '' ,
    paragraphe:  'L’assurance vie au Luxembourg fait partie des placements idéals pour les expatriés ou les futurs expatriés.En effet, le contrat d’assurance vie Luxembourgeois repose, entre autres, sur trois principes qui sont des avantages incontestables pour les expatriés ou futurs expatriés '
  },
]
</script>
<template>
  <div class="mt-5">
    <TextClassique :text="textNeutre" title="Pourquoi souscrire à une assurance vie au Luxembourg en tant que non-résident ?"/>
    <div class="d-flex justify-content-around text-center divGLobal mt-5">
      <div class=" text-center divIco">
        <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="../../public/life_neutrality.png">
        <h4 class="fw-bold">Neutralité fiscale en cas de vie</h4>
        <p class="w-75 mx-auto">Elle permet au souscripteur d’avoir une flexibilité dans la fiscalité de son contrat.
          En cas de changement de résidence fiscale, le contrat suivra la fiscalité du nouveau pays de résidence.</p>
      </div>

      <div class=" text-center">
        <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="../../public/testament.png">
        <h4 class="fw-bold">Neutralité fiscale en cas de décès</h4>
        <p class="w-75 mx-auto">Le droit civil luxembourgeois ne taxe pas les capitaux décès versés aux bénéficiaires dès lors que l’assuré n’est pas résident fiscal luxembourgeois. La succession du défunt ne supportera que les droits de succession de son lieu de résidence, ou celle des bénéficiaires.</p>
      </div>

      <div class=" text-center">
        <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="../../public/devise.png">
        <h4 class="fw-bold">Choix de la devise</h4>
        <p class="w-75 mx-auto">Le souscripteur d’une assurance vie luxembourgeoise peut verser sur son contrat une devise différente de l’euro.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icone_neutre {
  width: 100px;
  display: block;
  filter: brightness(0) saturate(100%) invert(65%) sepia(63%) saturate(406%) hue-rotate(8deg) brightness(94%) contrast(84%);

}


.divIco {
  width: fit-content;
  margin: 0;
}
.divGLobal{
  width: 90%;

}
</style>

