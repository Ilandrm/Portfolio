<script setup lang="ts">

import {useMediaQuery} from "@vueuse/core";
import BoxeText from "~/components/Home/BoxeText.vue";
import TextClassique from "~/components/utils/TextClassique.vue";

const isMobile = useMediaQuery("(max-width: 768px)");

const textTriangle = [
  {titre: 'Dépôt des actifs auprès d\'une banque dépositaire' ,
    paragraphe:  'Les actifs liés aux contrats d’assurance-vie sont déposés - séparément des autres engagements de la compagnie d’assurance- auprès d’une banque dépositaire préalablement approuvée par le Commissariat aux Assurances.',
    src:'icone_banque.png'
  },
  {
    titre: 'La convention tripartite' ,
    paragraphe: 'Le « triangle de sécurité » est matérialisé par la signature d’une convention tripartite de dépôt entre la compagnie d’assurances, la banque dépositaire et l’autorité de contrôle des assurances au Luxembourg (le Commissariat aux Assurances). Le cloisonnement des actifs est contrôlé chaque trimestre par le commissariat aux assurances.',
    src:'icone_doc.png'
  },
  {
    titre: 'Le super-privilège des souscripteurs' ,
    paragraphe: 'En cas de défaillance de l’assureur, l’autorité de contrôle peut bloquer les comptes pour protéger les droits des souscripteurs. Ainsi, les avoirs des clients déposés sur leur contrat d’assurance vie Luxembourgeois sont totalement indépendants des fonds propres de la compagnie d’assurance. En cas de faillite de la compagnie d’assurance, les créanciers ordinaires ne pourront exercer leur droit de recouvrement sur les actifs des contrats d’assurance vie Luxembourgeois, ainsi votre capital est protégé.',
    src:'icone_privilege.png'
  },
  {
    titre: 'Non application de la Loi Sapin 2' ,
    paragraphe: 'Instituée en France en 2016, peut limiter les retraits sur les contrats d’assurance vie français en cas de grave crise économique pour une période de 3 mois, renouvelable 3 mois supplémentaires (dans la limite de 6 mois consécutifs) Cette loi ne s’applique pas sur les contrats Luxembourgeois investis en unités de compte et sur certains contrats Luxembourgeois investis en fonds euro, qui ont choisi d’assurer leur fonds Euro en dehors de la France. Ainsi, les titulaires d’un contrat d’assurance vie ou de capitalisation luxembourgeois, ne risquent pas de voir leurs retraits bloqués.',
    src:'contrat.png'
  },
]
const textAvantage = [
  {
    titre: 'Le super privilège' ,
    paragraphe: 'Les souscripteurs disposent de la qualité de créanciers privilégiés de 1er rang de la compagnie d’assurances sur la masse des actifs.\n' +
        '\n' +
        'Ce privilège du souscripteur, qui prime sur tous les autres créanciers, quels qu’ils soient, doit permettre aux clients de récupérer en priorité les créances relatives à l’exécution de leurs contrats d’assurance en cas de défaillance de la compagnie d’assurance.'
  },
  {
    titre: 'La stabilité politique et économique' ,
    paragraphe: 'Comme aucun autre état Européen. Le Luxembourg bénéficie d’un AAA, la meilleure note possible contre un simple AA pour la France. Seul Quinze pays dans le monde bénéficient de ce rating.'
  },
  {
    titre:'La neutralité fiscale idéal pour les expatriés ou futur expatrié',
    paragraphe: 'Au Luxembourg, quelle que soit la résidence fiscale du souscripteur, les rachats opérés sur les contrats d’assurance-vie ne subissent aucune retenue à la source, contrairement à la France.\n' +
        '\n' +
        'Le souscripteur ne subit que la fiscalité de son lieu de résidence.\n' +
        '\n' +
        'Un souscripteur résident fiscale français sera donc soumis sur son contrat luxembourgeois à la fiscalité française au moment des rachats. Si ce même souscripteur part ensuite vivre à l’étranger et devient résident fiscal d’un autre pays, le contrat luxembourgeois va s’adapter aux règles fiscales du nouvel état de résidence du souscripteur.'
  },
  {
    titre:'Neutralité fiscale en cas de décès',
    paragraphe: 'Le droit civil Luxembourgeois ne taxe pas les capitaux décès versés aux bénéficiaires des lors que l’assuré n’est pas résident fiscal luxembourgeois. La succession du défunt ne supportera que les droits de succession de son lieu de résidence, et éventuellement celle des bénéficiaires.'
  },
  {
    titre:'Choix de la devise',
    paragraphe: 'La première particularité du contrat luxembourgeois, contrairement au contrat d’assurance-vie français, tient du fait qu’il peut être libellé ou alimenté en devise autre que l’Euro (Dollar américain USD, Livre sterling GBP ou Franc suisse CHF….).\n' +
        'Ce type de contrat est un avantage incontestable pour les expatriés, ou investisseurs ayant la volonté de s’expatrier dans le futur, ainsi il peuvent épargner sans avoir à subir les aléas des marchés des changes.'}
]
</script>

<template>
<h1 class="fw-bold d-flex justify-content-around mt-5 responsTitle">Les avantages de l'assurance-vie luxembourgeoise</h1>
  <h3 class="fw-bold d-flex justify-content-around mt-2 responsTitle responsTitleH ">Triangle de securité</h3>
<img alt ="triangle" class="imgTriangle d-flex justify-content-around mt-5 mx-auto" src="../../public/triangledesecurité.png">
 <BoxeText :text="textTriangle"/>
  <TextClassique :text="textAvantage"/>
</template>

<style scoped>
.imgTriangle{
  width: 50%;
}

@media (max-width: 768px) {
  .responsTitle{
      font-size: 20px;
      width: 85%;
      margin-left: auto;
      margin-right: auto;
  }
  .responsTitleH{
    font-size: 18px;
  }
  .imgTriangle{
    width: 350px;
  }
}
</style>
