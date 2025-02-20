<script setup lang="ts">
import TextClassique from "~/components/utils/TextClassique.vue";

const textFonctionnement = [
  {
    titre:'Comment fonctionne le triangle de sécurité pour les assurances-vie au\n' +
        'Luxembourg?',
    paragraphe:'Les compagnies d’assurance au Luxembourg offrent un régime de protection unique en Europe pour les souscripteurs d’un contrat d\'assurance vie au Luxembourg.\n' +
        'Il est appelé le triangle de sécurité : il repose sur trois parties prenantes :'
  }
]
const textSuiteFonctionnement = [
  {
    titre:'',
    paragraphe:'Ce Triangle de sécurité offre une protection juridique pour les souscripteurs d’assurance vie ou leur bénéficiaire unique en Europe. C’est l’un des atouts majeurs du contrat d’assurance vie.\n' +
        '\n' +
        'Il assure la séparation entre les avoirs du souscripteur, et les actifs des actionnaires et autres créanciers de la compagnie d’assurance.\n' +
        '\n' +
        'Ainsi, les actifs liés aux contrats d\'assurance-vie, qu’on appelle les provisions techniques sont déposés (séparément des autres engagements de la compagnie) auprès d’une banque dépositaire préalablement approuvée par le Commissariat aux Assurances (CAA).',
  }
]
</script>

<template>
  <div class="mt-5">
<TextClassique :text="textFonctionnement"/>

  <div class="d-flex justify-content-around  divGLobal mt-3 mx-auto mb-3">
    <div class=" text-center divIco">
      <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="public/user.png">
      <h4 class="fw-bold">Entreprise d’assurance</h4>
    </div>
    <div class=" text-center divIco">
      <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="public/file.png">
      <h4 class="fw-bold"> Commissariat aux assurances</h4>
    </div>
    <div class=" text-center divIco">
      <img class="icone_neutre d-block mx-auto mb-3" alt="icone" src="public/banque.png">
      <h4 class="fw-bold">Banque dépositaire</h4>
    </div>

  </div>
<TextClassique :text="textSuiteFonctionnement"/>
  </div>
</template>

<style scoped>
.icone_neutre {
  width: 50px;
  display: block;
}

.divIco {
  margin: 0;
}

.divGLobal {
  width: 60%;
  flex-wrap: wrap;
  text-align: center;
  border-radius: 7px;
}

</style>
