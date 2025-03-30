<script setup lang="ts">

import TextClassique from "~/components/utils/TextClassique.vue";
const textEvo = [{
  titre:'Évaluation des frais de gestion et des frais d\'entrée :',
  paragraphe: "Les frais d’entrée et les frais de gestion sont totalement transparents lors de la souscription de votre contrat.\n" +
      "Ils doivent être stipulés sur le contrat.\n" +
      "\n" +
      "Pali Kao Capital ne prend aucun frais d’entrée ou sur versements (commission prélevée à chaque nouvelle prime versée par le souscripteur).\n" +
      "\n" +
      "Pali Kao Capital appliquent des frais de gestion dégressifs Les frais de gestion servent à rémunérer les sociétés de gestion, les assureurs et les distributeurs de contrats. Ils sont calculés à partir d’un pourcentage annuel appliqué sur la valorisation du contrat. Les contrats d’assurance vie hébergés au Luxembourg\n" +
      "nous permettent d’avoir une certaine flexibilité sur les frais de gestion, ainsi nous appliquons un taux dégressif de frais en fonction du montant du contrat ."
},
  {
    titre:'Comparaison des performances passées de chaque compagnie',
    paragraphe: 'Les performances de chaque contrat dépendent de l’allocation d’actifs de chaque contrat.\n' +
        '\n' +
        'Les unités de compte composant l’allocations d’actifs (à part le fonds euro et quelques produits structurés qui proposent une garantie en capital) ne sont pas\n' +
        'capital garanti et varient en fonction de leur sous-jacents (actions, obligations, indices boursiers, immobilier etc..).\n' +
        '\n' +
        'Ainsi, la seule cohérence pour la comparaison des performances passées est fonction du fonds euro de la compagnie d’assurance Luxembourgeoise quand celle-ci le propose.'
  }]
const textregul = [{
  titre:'',
  paragraphe:'Un des atouts majeurs du contrat Luxembourgeois est la neutralité fiscale du contrat en cas de vie ou de décès. Ainsi la fiscalité du contrat suivra le souscripteur tout au long de son parcours de vie.\n' +
      '\n' +
      'S’il s’expatrie, c’est la fiscalité de sa nouvelle résidence fiscale qui s’appliquera.'
},
  {
    titre:'Exonération de l\'impôt sur les plus-values',
    paragraphe:'La fiscalité du contrat d’assurance vie Luxembourgeois dépendra de votre lieu de résidence fiscale.Ainsi, si vous êtes résident français vous pouvez avoir une exonération partielle de votre impôt sur la plus-value. Si vous êtes résident fiscale d’un autre pays, c’est la fiscalité de votre pays de résidence qui s’appliquera.'
  },
  {
    titre:'Fiscalité sur les successions et les donations',
    paragraphe:'Une des caractéristiques du contrat d’assurance vie est sa clause bénéficiaire.\n' +
        '\n' +
        'Ainsi en cas de décès du souscripteur, le(s) bénéficiaire(s) du contrat (explicitement notifié dans la clause) recevra les sommes investies sur le contrat d’assurance vie du souscripteur.\n' +
        '\n' +
        'La somme reçue par le bénéficiaire bénéficie d’une exonération en France pour un montant allant jusqu’à 152 500 euros, si les versements du souscripteur ont lieu avant 70 ans. La particularité du contrat d’assurance vie Luxembourgeois est la neutralité fiscale en cas de décès.\n' +
        '\n' +
        'Ainsi, Le droit civil luxembourgeois ne taxe pas les capitaux décès versés aux bénéficiaires dès lors que l’assuré n’est pas résident fiscal luxembourgeois. La succession du défunt ne supportera que les droits de succession de son lieu de résidence, ou celle du ou des bénéficiaire(s).'
  },
]
</script>

<template>
  <div class="mt-5">
    <TextClassique :text="textEvo"/>

  </div>
  <div class="mt-2 mb-3">
  <h1 class="fw-bold d-flex justify-content-around d-flex justify-content-around">Réglementation fiscale pour les non-résidents souscrivant à une assurance vie au Luxembourg</h1>
  </div>
    <TextClassique :text="textregul"></TextClassique>

</template>

<style scoped>
h1{
  font-size: 25px;
}
@media (max-width: 768px) {
  h1 {
    font-size: 20px;
    width: 90%;
    margin:auto;
  }
}
</style>
