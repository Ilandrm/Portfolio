<script setup lang="ts">
import {useMediaQuery} from "@vueuse/core";

const isMobile = useMediaQuery("(max-width: 768px)");
</script>

<template>
  <h1 class="fw-bold d-flex justify-content-around mt-5 responsTitle">Nos Valeurs</h1>
  <div class="mx-auto w-75" v-if="!isMobile">
  <div class="d-flex justify-content-around text-center divGLobal mt-5">
    <div class="text-center divIco">
      <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="public/transparence.png">
      <h4 class="fw-bold">La transparence</h4>
      <p class="w-75 mx-auto">Nous vous accompagnons lors de vos prises de décision, avec un engagement de transparence que vos interlocuteurs financiers (producteurs & distributeurs de produits) ne peuvent que rarement garantir.</p>
    </div>

    <div class="text-center divIco">
      <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="public/confidentialité.png">
      <h4 class="fw-bold">La confidentialité</h4>
      <p class="w-75 mx-auto">Nous garantissons une confidentialité totale sur le patrimoine de nos clients. Nous sommes astreints au secret professionnel, nous protégeons le secret de votre patrimoine.</p>
    </div>

    <div class="text-center divIco">
      <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="public/confiance.png">
      <h4 class="fw-bold">La confiance</h4>
      <p class="w-75 mx-auto">La confiance est pour nous la première valeur dans la gestion de patrimoine. Nos clients investissent d’abord leur confiance avant de nous confier leur patrimoine.</p>    </div>
  </div>
    <div class="d-flex justify-content-around text-center divGLobal mt-5">
      <div class="text-center divIco">
        <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="public/expliquer.png">
        <h4 class="fw-bold">Expliquer plutôt que convaincre</h4>
        <p class="w-75 mx-auto">Nous pensons qu’une décision prise en connaissance de cause débouche sur une relation pérenne et fructueuse. C’est pourquoi nous mettons tout en œuvre pour que les solutions retenues soient celles qui vous conviennent.</p>
      </div>
      <div class="text-center divIco">
        <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="public/dispo.png">
        <h4 class="fw-bold">La disponibilité</h4>
        <p class="w-75 mx-auto">Nous vous aidons à construire votre patrimoine, nous savons à quel point cela est important pour vous, cela implique de notre part une disponibilité sans faille.</p>
      </div>

      <div class="text-center divIco">
        <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="public/conseil.png">
        <h4 class="fw-bold">Le choix du conseil autonome</h4>
        <p class="w-75 mx-auto">Ne dépendre d’aucun fournisseur permet une grande liberté de conseil. Aucune institution financière ou immobilière n’est présente dans notre capital, ce qui nous permet de sélectionner librement les produits d’investissement et les services qui vous correspondent au mieux.</p>
      </div>

    </div>
  </div>

  <div class="mx-auto w-100" v-else>
    <div class="d-flex justify-content-around text-center divGLobal mt-5">
      <div class="text-center divIco">
        <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="public/transparence.png">
        <h4 class="fw-bold">La transparence</h4>
        <p class="w-75 mx-auto">Nous vous accompagnons lors de vos prises de décision, avec un engagement de transparence que vos interlocuteurs financiers (producteurs & distributeurs de produits) ne peuvent que rarement garantir.</p>
      </div>

      <div class="text-center divIco">
        <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="public/confidentialité.png">
        <h4 class="fw-bold">La confidentialité</h4>
        <p class="w-75 mx-auto">Nous garantissons une confidentialité totale sur le patrimoine de nos clients. Nous sommes astreints au secret professionnel, nous protégeons le secret de votre patrimoine.</p>
      </div>
    </div>
    <div class="d-flex justify-content-around text-center divGLobal mt-5">

      <div class="text-center divIco">
        <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="public/confiance.png">
        <h4 class="fw-bold">La confiance</h4>
        <p class="w-75 mx-auto">La confiance est pour nous la première valeur dans la gestion de patrimoine. Nos clients investissent d’abord leur confiance avant de nous confier leur patrimoine.</p>    </div>
      <div class="text-center divIco">
        <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="public/expliquer.png">
        <h4 class="fw-bold">Expliquer plutôt que convaincre</h4>
        <p class="w-75 mx-auto">Nous pensons qu’une décision prise en connaissance de cause débouche sur une relation pérenne et fructueuse. C’est pourquoi nous mettons tout en œuvre pour que les solutions retenues soient celles qui vous conviennent.</p>
      </div>
    </div>
      <div class="d-flex justify-content-around text-center divGLobal mt-5">

      <div class="text-center divIco">
        <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="public/dispo.png">
        <h4 class="fw-bold">La disponibilité</h4>
        <p class="w-75 mx-auto">Nous vous aidons à construire votre patrimoine, nous savons à quel point cela est important pour vous, cela implique de notre part une disponibilité sans faille.</p>
      </div>

      <div class="text-center divIco">
        <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="public/conseil.png">
        <h4 class="fw-bold">Le choix du conseil autonome</h4>
        <p class="w-75 mx-auto">Ne dépendre d’aucun fournisseur permet une grande liberté de conseil. Aucune institution financière ou immobilière n’est présente dans notre capital, ce qui nous permet de sélectionner librement les produits d’investissement et les services qui vous correspondent au mieux.</p>
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
.divGLobal {
  width: 100%;

}
@media (min-width: 768px) {

  .divIco {
    width: 30%;
    margin: 0;
    padding: 1%;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
}
@media (max-width: 768px) {
  h4{
    font-size: 18px
  }
  p{
    font-size: 15px;
  }
  .divIco {
    width: 50%;
    margin: 0;
    padding: 1%;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
  h1{
    font-size: 25px;
  }

}
</style>

