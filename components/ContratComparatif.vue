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
</script>

<template>
  <div class="mt-5">
    <h1 class="fw-bold d-flex justify-content-around d-flex justify-content-around">Comparaison des compagnies d'assurance offrant l'assurance vie au Luxembourg pour non-résident</h1>
    <table class="mx-auto mt-3">
      <thead>
      <tr class="header-images">
        <th></th>
        <th><img class="contrat_icone" src="public/generali.png" alt="Generali"></th>
        <th><img class="contrat_icone" src="public/baloise.png" alt="Baloise"></th>
        <th><img class="contrat_icone" src="public/wealins.png" alt="Wealins"></th>
        <th><img class="contrat_icone" src="public/cardif.png" alt="Cardif"></th>
        <th><img class="contrat_icone" src="public/Lombard.png" alt="Lombard"></th>
        <th><img class="contrat_icone" src="public/onelife.png" alt="One Life"></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Versement minimum à la souscription</td>
        <td>250 000 €</td>
        <td>50 000 €</td>
        <td>125 000 €</td>
        <td>250 000 €</td>
        <td>250 000 €</td>
        <td>100 000 €</td>
      </tr>
      <tr>
        <td>Versement minimum FID</td>
        <td>250 000 €</td>
        <td>250 000 €</td>
        <td>125 000 €</td>
        <td>250 000 €</td>
        <td>250 000 €</td>
        <td>125 000 €</td>
      </tr>
      <tr>
        <td>Versement minimum FAS</td>
        <td>300 000 €</td>
        <td>50 000 €</td>
        <td>125 000 €</td>
        <td>250 000 €</td>
        <td>250 000 €</td>
        <td>125 000 €</td>
      </tr>
      <tr>
        <td>Capitaux administrés</td>
        <td>5,5 milliards €</td>
        <td>10 milliards €</td>
        <td>13,1 milliards €</td>
        <td>28 milliards €</td>
        <td>47 milliards €</td>
        <td>9 milliards €</td>
      </tr>
      <tr>
        <td>Frais d’entrée</td>
        <td>0%</td>
        <td>0%</td>
        <td>0%</td>
        <td>0%</td>
        <td>0%</td>
        <td>0%</td>
      </tr>
      <tr>
        <td>Frais de sortie</td>
        <td>0%</td>
        <td>0%</td>
        <td>0%</td>
        <td>0%</td>
        <td>0%</td>
        <td>0%</td>
      </tr>
      <tr>
        <td>Présence du fonds Euro</td>
        <td>OUI</td>
        <td>NON</td>
        <td>NON</td>
        <td>OUI</td>
        <td>NON</td>
        <td>NON</td>
      </tr>
      <tr>
        <td>Ratio de solvabilité II</td>
        <td>186,70%</td>
        <td>137%</td>
        <td>200%</td>
        <td>133%</td>
        <td>136,60%</td>
        <td>140%</td>
      </tr>
      <tr>
        <td>Digitalisation</td>
        <td>100% DIGITAL</td>
        <td>100% DIGITAL</td>
        <td>100% DIGITAL</td>
        <td>100% DIGITAL</td>
        <td>100% DIGITAL</td>
        <td>100% DIGITAL</td>
      </tr>
      <tr>
        <td>Notre avis</td>
        <td>
          Sécurité et solidité d’un grand groupe. Back office irréprochable.
          Présence du fonds Euros sur son contrat (taux 2022 : 1,8% brut sans compter les bonifications possibles).
        </td>
        <td>
          Une des compagnies les plus accessibles du marché avec un ticket d’entrée de 50 000 Euros.
        </td>
        <td>
          30 ans d’expérience, un des contrats les plus accessibles en FAS et solvabilité de la maison mère (le groupe Foyer).
        </td>
        <td>
          Contrats phares du marché. Adossé à un des plus grands groupes bancaires européens (BNP),
          expertise reconnue, une large gamme de fonds disponibles et un back office très réactif.
        </td>
        <td>
          25 ans d’expérience, couverture géographique la plus étendue du marché (présent dans 23 pays).
          Premier collecteur de prime 100% UC sur le marché luxembourgeois. Un grand savoir-faire en private equity.
        </td>
        <td>
          Un des contrats les plus agiles et accessibles du marché, souplesse de gestion,
          grand choix de fonds de private equity, couverture géographique flexible.
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div class="mt-5">
  <TextClassique :text="textEvo"/>
    <hr class="w-100 mb-3"/>

  </div>
</template>

<style scoped>
.contrat_icone{
  width: 100px;
  object-fit: contain;
  aspect-ratio: auto;
  flex-grow: 1;
  margin-left: auto;
  margin-right: auto;
}
table{
  font-size: 15px;
  color: white;
  font-weight: bold;
  width: 80%;
}
tr,td,th{
  background-color: #000b31;
  padding: 2%;
  border: 5px solid white;
  align-content: center;
}
td{
  margin-left: 0;
  width: 10%;
}
h1{
  font-size: 35px;
}

@media (max-width:768px){
  h1{
    font-size:20px;
    margin-right:auto;
    margin-left:auto;
    width:80%
  }
  p{
    font-size:15px;
  }
  table{
    font-size:12px;
  }
  th{
    font-size:15px;
  }
}
</style>
