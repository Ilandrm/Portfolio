<script setup lang="ts">
import TextClassique from "~/components/utils/TextClassique.vue";


</script>

<template>
  <div class="mt-5">
    <h1 class="fw-bold d-flex justify-content-around d-flex justify-content-around">Comparaison des compagnies d'assurance offrant l'assurance vie au Luxembourg pour non-résident</h1>
    <table class="mx-auto mt-3">
      <thead>
      <tr class="header-images">
        <th ></th>
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
        <td>125 000 €</td>
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

</template>

<style scoped>
.contrat_icone {
  width: 100%; /* Remplit toute la largeur de la cellule */
  height: auto; /* Garde le ratio d'aspect */
  max-height: 100px; /* Ajuste selon tes besoins */
  object-fit: contain; /* Garde l'image bien proportionnée */
  display: block;
  margin: auto;
}
th {
  width: auto;
  text-align: center;
  padding: 2%;
  border: 5px solid white;
  align-content: center;
  background-color: #c9a646;
}
table{
  font-size: 15px;
  color: white;
  font-weight: bold;
  width: 80%;
}
tr,td{
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
  font-size: 30px;
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
